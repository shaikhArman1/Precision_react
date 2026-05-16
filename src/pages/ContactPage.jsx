import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";

const helpOptions = [
  "Brand Design",
  "Web Development",
  "Digital Marketing",
  "Product Design",
  "Video Production",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    help: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.help || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    // Simulate form submission
    setSubmitted(true);
    toast.success("Message sent successfully!");
  };

  return (
    <div className="bg-white">
      <Navbar />

      <section className="page-section py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Form */}
          <div>
            <span className="section-label">Contact</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 mt-4 leading-[1.1]">
              Let's Create Something Extraordinary.
            </h1>
            <p className="mt-4 text-gray-500 text-lg">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-10 p-8 bg-green-50 rounded-2xl border border-green-100 text-center animate-fade-in-up">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900">
                  Message Sent!
                </h3>
                <p className="text-gray-500 mt-2">
                  We'll review your project details and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", help: "", message: "" });
                  }}
                  className="btn-primary mt-6 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="input-field"
                    id="contact-name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-field"
                    id="contact-email"
                  />
                </div>

                {/* How can we help */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    How can we help?
                  </label>
                  <select
                    name="help"
                    value={form.help}
                    onChange={handleChange}
                    className="input-field text-gray-500"
                    id="contact-help"
                  >
                    <option value="">Select a service</option>
                    {helpOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="input-field resize-none"
                    id="contact-message"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  id="contact-submit"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="lg:pt-16">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-50 mt-0.5">
                      <Mail size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <p className="text-sm text-gray-500">hello@precision.agency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-50 mt-0.5">
                      <Phone size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone</p>
                      <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-50 mt-0.5">
                      <MapPin size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Address</p>
                      <p className="text-sm text-gray-500">
                        123 Business Ave, Suite 200
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-50 mt-0.5">
                      <Clock size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Business Hours</p>
                      <p className="text-sm text-gray-500">
                        Mon – Fri: 9:00 AM – 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {["Twitter", "LinkedIn", "Dribbble", "Behance"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-xs font-medium text-gray-500 bg-white px-3 py-2 rounded-lg border border-gray-200 hover:border-brand-300 hover:text-brand-600 transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
