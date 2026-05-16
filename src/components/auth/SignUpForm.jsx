import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import OTPVerification from "./OTPVerification";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Globe,
  Eye,
  EyeOff,
  Building,
} from "lucide-react";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const [step, setStep] = useState(1); // 1 = form, 2 = OTP
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const { signup, saveProfile } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate and send OTP via EmailJS
  const generateAndSendOTP = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          // Send multiple naming variations so the template picks up whichever is configured
          to_email: formData.email,
          email: formData.email,
          to_name: formData.fullName,
          user_name: formData.fullName,
          otp_code: otp,
          otp: otp,
          code: otp,
          verification_code: otp,
          message: `Your OTP verification code is: ${otp}`,
        },
        publicKey
      );
      toast.success("OTP sent to your email!");
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error(
        "Failed to send OTP email. Please check your EmailJS template settings."
      );
      throw err; // Re-throw so handleSubmit catches it and doesn't proceed to step 2
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const { fullName, email, password, phone, city, state, country } = formData;
    if (!fullName || !email || !password || !phone || !city || !state || !country) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      await generateAndSendOTP();
      setStep(2); // Move to OTP verification
    } catch (err) {
      toast.error("Failed to send OTP. Please try again.");
    }
    setLoading(false);
  };

  const handleOTPVerified = async () => {
    setLoading(true);
    try {
      const result = await signup(formData.email, formData.password);

      // Save user profile
      saveProfile(result.user.uid, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        emailVerified: true,
        createdAt: new Date().toISOString(),
      });

      toast.success("Email verified & account created!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Firebase signup error:", err.code, err.message);
      let msg;
      switch (err.code) {
        case "auth/email-already-in-use":
          msg = "An account with this email already exists. Please log in instead.";
          break;
        case "auth/weak-password":
          msg = "Password is too weak. Use at least 6 characters.";
          break;
        case "auth/invalid-email":
          msg = "Invalid email address format.";
          break;
        case "auth/network-request-failed":
          msg = "Network error. Please check your connection.";
          break;
        default:
          msg = `Sign up failed: ${err.message}`;
      }
      toast.error(msg);
      setStep(1); // Go back to form
    }
    setLoading(false);
  };

  const handleResendOTP = () => {
    generateAndSendOTP();
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", icon: User, placeholder: "John Doe", colSpan: "col-span-2" },
    { name: "email", label: "Email Address", type: "email", icon: Mail, placeholder: "you@example.com", colSpan: "col-span-2" },
    { name: "password", label: "Password", type: showPassword ? "text" : "password", icon: Lock, placeholder: "Min. 6 characters", colSpan: "col-span-2", hasToggle: true },
    { name: "phone", label: "Phone Number", type: "tel", icon: Phone, placeholder: "+91 9876543210", colSpan: "col-span-2" },
    { name: "city", label: "City", type: "text", icon: Building, placeholder: "Mumbai" },
    { name: "state", label: "State", type: "text", icon: MapPin, placeholder: "Maharashtra" },
    { name: "country", label: "Country", type: "text", icon: Globe, placeholder: "India", colSpan: "col-span-2" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-lg animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="text-xl font-bold tracking-wider text-navy-900">
            PRECISION
          </Link>
          {step === 1 && (
            <>
              <h1 className="text-2xl font-semibold text-navy-900 mt-6">
                Create Account
              </h1>
              <p className="text-gray-500 mt-2">
                Join Precision. Start building something extraordinary.
              </p>
            </>
          )}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              {fields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name} className={field.colSpan || ""}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {field.label}
                    </label>
                    <div className="relative">
                      <Icon
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="input-field pl-11"
                        id={`signup-${field.name}`}
                      />
                      {field.hasToggle && (
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  id="signup-submit"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <OTPVerification
              email={formData.email}
              expectedOTP={generatedOTP}
              onVerified={handleOTPVerified}
              onResend={handleResendOTP}
            />
          )}
        </div>

        {/* Login Link */}
        {step === 1 && (
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-brand-600 font-semibold hover:text-brand-700"
            >
              Log In
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
