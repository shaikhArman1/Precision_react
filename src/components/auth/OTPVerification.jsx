import { useState, useRef, useEffect } from "react";
import { ShieldCheck, RotateCcw } from "lucide-react";
import toast from "react-hot-toast";

export default function OTPVerification({ email, expectedOTP, onVerified, onResend }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const inputRefs = useRef([]);

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  // Auto-focus first input
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take last digit
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace: move to previous
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOtp(newOtp);
    // Focus last filled or next empty
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) {
      toast.error("Please enter all 6 digits");
      return;
    }

    setLoading(true);
    // Small delay to simulate verification
    setTimeout(() => {
      if (code === expectedOTP) {
        // Don't show toast here — let the parent handle it
        // after Firebase account creation succeeds
        onVerified();
      } else {
        toast.error("Invalid OTP. Please try again.");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
      setLoading(false);
    }, 800);
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    onResend();
    setResendTimer(60);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="text-center animate-fade-in-up">
      <div className="w-16 h-16 rounded-full gradient-blue flex items-center justify-center mx-auto mb-6">
        <ShieldCheck size={28} className="text-white" />
      </div>

      <h2 className="text-2xl font-semibold text-navy-900">Verify Your Email</h2>
      <p className="text-gray-500 mt-2 text-sm">
        We've sent a 6-digit code to{" "}
        <span className="font-medium text-gray-700">{email}</span>
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-3 mt-8" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-14 text-center text-xl font-semibold border-2 border-gray-200 rounded-xl
                       focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none
                       transition-all duration-200"
            id={`otp-input-${index}`}
          />
        ))}
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={loading || otp.join("").length !== 6}
        className="btn-primary w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
        id="verify-otp"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
        ) : (
          "Verify Email"
        )}
      </button>

      {/* Resend */}
      <div className="mt-6">
        {resendTimer > 0 ? (
          <p className="text-sm text-gray-400">
            Resend code in <span className="font-medium text-gray-600">{resendTimer}s</span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-sm text-brand-600 font-medium hover:text-brand-700 inline-flex items-center gap-1.5"
          >
            <RotateCcw size={14} />
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
}
