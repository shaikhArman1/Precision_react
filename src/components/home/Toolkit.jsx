import { Link } from "react-router-dom";
import {
  PenLine,
  Megaphone,
  Palette,
  Film,
  Gauge,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: PenLine,
    title: "Script Writing",
    description:
      "Articulating the cornerstone of your brand through compelling dialogue and strategic storytelling.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Omnichannel strategies that place your message in the minds of the right customers.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "Architecting digital ecosystems that prioritize user focus and elevated aesthetics.",
    highlight: true,
  },
  {
    icon: Film,
    title: "Video Editing",
    description:
      "High-end post-production that maintains the integrity of your visual language.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Data-driven tuning that respects the aesthetic soul of your campaigns.",
  },
];

export default function Toolkit() {
  return (
    <section className="bg-gray-50/80 py-20 lg:py-28">
      <div className="page-section">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
          <div>
            <span className="section-label">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3">
              The Precision Toolkit
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            A curated selection of battle-tested creative disciplines, aimed at
            total brand narrative mastery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`p-7 rounded-xl transition-all duration-300 group ${
                  service.highlight
                    ? "gradient-blue text-white shadow-lg shadow-brand-600/20"
                    : "bg-white border border-gray-100 hover:border-brand-200 hover:shadow-md"
                }`}
              >
                <Icon
                  size={24}
                  className={
                    service.highlight
                      ? "text-white/80"
                      : "text-brand-600"
                  }
                />
                <h3 className="text-lg font-semibold mt-5 mb-2">
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
                {service.highlight && (
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    Explore our design ethos
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
