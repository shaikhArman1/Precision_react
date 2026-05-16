import { Link } from "react-router-dom";
import landingImg from "../../assets/landing.png";

export default function Hero() {
  return (
    <section className="page-section py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-up">
          <span className="section-label">Digital Curators</span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] mt-6 text-navy-900">
            Elevating{" "}
            <span className="text-brand-600">Brand Stories</span> With Intent.
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
            We don't just build interfaces. We curate experiences through
            rigorous precision and editorial authority.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/case-studies" className="btn-primary">
              View Showcase
            </Link>
            <Link to="/services" className="btn-outline">
              The Methodology
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-fade-in relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-600/10">
            <img
              src={landingImg}
              alt="Brand showcase — modern design workspace"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -z-10 top-8 -right-4 w-full h-full rounded-2xl bg-brand-100/50" />
        </div>
      </div>
    </section>
  );
}
