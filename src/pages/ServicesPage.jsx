import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import {
  PenLine,
  Megaphone,
  Palette,
  Film,
  Gauge,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import heroImg from "../assets/landing.png";

const services = [
  {
    icon: PenLine,
    title: "Script Writing",
    description:
      "We articulate the cornerstone of your brand through compelling dialogue and strategic storytelling. Every word is intentional, every narrative arc crafted to resonate.",
    capabilities: ["Brand Narratives", "Content Strategy", "Copywriting", "Storyboarding"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Omnichannel strategies that place your message in the minds of the right customers. We blend data-driven precision with creative instinct.",
    capabilities: ["SEO & SEM", "Social Media", "Email Campaigns", "Analytics"],
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "Architecting digital ecosystems that prioritize user focus and elevated aesthetics. We turn complex problems into intuitive, beautiful solutions.",
    capabilities: ["UX Research", "UI Design", "Prototyping", "Design Systems"],
  },
  {
    icon: Film,
    title: "Video Editing",
    description:
      "High-end post-production that maintains the integrity of your visual language. From raw footage to polished masterpieces.",
    capabilities: ["Color Grading", "Motion Graphics", "Sound Design", "VFX"],
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Data-driven tuning that respects the aesthetic soul of your campaigns. We optimize without compromise.",
    capabilities: ["A/B Testing", "Conversion Rate Optimization", "Load Speed", "Core Web Vitals"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Deep dive into your brand, goals, and audience." },
  { step: "02", title: "Strategy", description: "Data-informed approach tailored to your objectives." },
  { step: "03", title: "Execution", description: "Meticulous implementation with constant refinement." },
  { step: "04", title: "Delivery", description: "Polished results that exceed expectations." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="page-section py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="section-label">Our Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-900 mt-4 leading-[1.1]">
            Precision in Execution, Innovation in Thought.
          </h1>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl leading-relaxed">
            We bring together creative excellence and strategic thinking to deliver
            results that matter. Every project is approached with meticulous attention
            to detail.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50/80 py-20 lg:py-28">
        <div className="page-section space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex items-center gap-4 lg:min-w-[200px]">
                    <div className="p-3 rounded-xl bg-brand-50 group-hover:bg-brand-100 transition-colors">
                      <Icon size={24} className="text-brand-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="page-section">
          <div className="text-center mb-16">
            <span className="section-label">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3">
              Our Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="text-center group">
                <div className="text-5xl font-bold text-brand-100 group-hover:text-brand-200 transition-colors mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-blue py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Let's discuss how we can elevate your brand.
          </p>
          <Link to="/contact" className="btn-white inline-block mt-8">
            Start a Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
