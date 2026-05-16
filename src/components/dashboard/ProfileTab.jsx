import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  Save,
  Lock,
  CheckCircle2,
  Shield,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ProfileTab() {
  const { currentUser, userProfile, updateProfile, resetPassword } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    fullName: userProfile?.fullName || "",
    phone: userProfile?.phone || "",
    city: userProfile?.city || "",
    state: userProfile?.state || "",
    country: userProfile?.country || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateProfile(form);
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handlePasswordReset = async () => {
    try {
      await resetPassword(currentUser.email);
      toast.success("Password reset email sent!");
    } catch {
      toast.error("Failed to send reset email");
    }
  };

  const fields = [
    { name: "fullName", label: "Full Name", icon: User, value: form.fullName },
    { name: "email", label: "Email", icon: Mail, value: currentUser?.email || "", disabled: true },
    { name: "phone", label: "Phone Number", icon: Phone, value: form.phone },
    { name: "city", label: "City", icon: Building, value: form.city },
    { name: "state", label: "State", icon: MapPin, value: form.state },
    { name: "country", label: "Country", icon: Globe, value: form.country },
  ];

  return (
    <div className="max-w-3xl space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-navy-900">Profile</h2>
          <p className="text-sm text-gray-400 mt-1">Manage your account information</p>
        </div>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="btn-primary text-sm !py-2.5"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="btn-primary text-sm !py-2.5 flex items-center gap-2"
          >
            <Save size={16} />
            Save Changes
          </button>
        )}
      </div>

      {/* Profile Header Card */}
      <div className="card p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl gradient-blue flex items-center justify-center text-2xl font-bold text-white">
            {userProfile?.fullName?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-navy-900">
              {userProfile?.fullName || "User"}
            </h3>
            <p className="text-gray-500">{currentUser?.email}</p>
            <div className="flex items-center gap-1.5 mt-2 justify-center sm:justify-start">
              <CheckCircle2 size={14} className="text-green-500" />
              <span className="text-xs text-green-600 font-medium">
                Email Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Fields */}
      <div className="card p-8">
        <h4 className="text-lg font-semibold text-navy-900 mb-6">
          Personal Information
        </h4>
        <div className="grid sm:grid-cols-2 gap-5">
          {fields.map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.label}
                </label>
                <div className="relative">
                  <Icon
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                    disabled={field.disabled || !editing}
                    className={`input-field pl-11 ${
                      field.disabled
                        ? "bg-gray-50 text-gray-500 cursor-not-allowed"
                        : !editing
                        ? "bg-gray-50 text-gray-700"
                        : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security Section */}
      <div className="card p-8">
        <h4 className="text-lg font-semibold text-navy-900 mb-2">Security</h4>
        <p className="text-sm text-gray-400 mb-6">Manage your password and security settings</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-50">
              <Lock size={18} className="text-brand-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-900">Password</p>
              <p className="text-xs text-gray-400">Last changed: Unknown</p>
            </div>
          </div>
          <button
            onClick={handlePasswordReset}
            className="btn-outline text-sm !py-2"
          >
            Reset Password
          </button>
        </div>

        <div className="flex items-center gap-3 mt-4 p-4 bg-green-50 rounded-xl">
          <Shield size={18} className="text-green-600" />
          <p className="text-sm text-green-700 font-medium">
            Your account is protected with email verification
          </p>
        </div>
      </div>

      {/* Account Info */}
      <div className="card p-8">
        <h4 className="text-lg font-semibold text-navy-900 mb-4">Account Details</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Account Created</span>
            <span className="text-navy-900 font-medium">
              {userProfile?.createdAt
                ? new Date(userProfile.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "—"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">User ID</span>
            <span className="text-navy-900 font-mono text-xs">
              {currentUser?.uid?.slice(0, 16)}...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
