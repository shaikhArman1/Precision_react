import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import case1 from "../assets/minimal.png";
import case2 from "../assets/case_study_watch_1776619519977.png";
import case3 from "../assets/case_study_analytics_1776619490898.png";
import case4 from "../assets/case_study_finance_1776619890487.png";
import case5 from "../assets/case_study_social_app_1776619830320.png";
import case6 from "../assets/service_video_editing_console_large_1776620204645.png";

const caseStudies = [
  {
    image: case1,
    title: "Lumière Atelier",
    year: "2024",
    category: "Editorial · Web Design · Branding",
    description:
      "A high-fashion e-commerce experience built to reflect the elegance and sophistication of a Parisian atelier.",
    results: ["200% increase in online sales", "45% higher engagement", "Featured in Awwwards"],
  },
  {
    image: case2,
    title: "Aurelius Watch Co.",
    year: "2024",
    category: "E-Commerce · Brand Identity",
    description:
      "Redefining luxury retail digitally. We crafted a seamless shopping experience that mirrors the precision of Swiss watchmaking.",
    results: ["3x conversion rate", "60% mobile traffic increase", "Luxury brand award winner"],
  },
  {
    image: case3,
    title: "Vertex Analytics",
    year: "2025",
    category: "Product Design · Dashboard",
    description:
      "An analytics dashboard that turns complex data into clear, actionable insights without sacrificing aesthetic quality.",
    results: ["Reduced data analysis time by 40%", "98% user satisfaction", "Enterprise adoption"],
  },
  {
    image: case4,
    title: "Horizon Financial",
    year: "2024",
    category: "Brand Strategy · Web Design",
    description:
      "A complete rebrand for a fintech company, establishing trust and modernity in a competitive market.",
    results: ["Brand recognition up 85%", "Lead generation +120%", "Industry press coverage"],
  },
  {
    image: case5,
    title: "Pulse Fitness",
    year: "2025",
    category: "Mobile App · Product Design",
    description:
      "A fitness app that combines beautiful design with intelligent workout planning and social features.",
    results: ["500k+ downloads", "4.8 star rating", "Health & Fitness Top 10"],
  },
  {
    image: case6,
    title: "Nordic Spaces",
    year: "2025",
    category: "Motion Direction · Brand Identity",
    description:
      "Bringing Scandinavian interior design philosophy to the digital space through immersive visual storytelling.",
    results: ["International design award", "150% web traffic growth", "Partnership with IKEA"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="page-section py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="section-label">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-900 mt-4 leading-[1.1]">
            Crafting digital authority for global brands.
          </h1>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-2xl">
            Each project is a testament to our commitment to excellence. Explore
            how we've helped brands transform their digital presence.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-gray-50/80 py-20 lg:py-28">
        <div className="page-section">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group ${
                  index === 0 || index === 5 ? "md:col-span-2" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                      index === 0 || index === 5 ? "h-72 sm:h-96" : "h-56 sm:h-72"
                    }`}
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                      {study.year}
                    </span>
                    <span className="text-sm text-gray-400">{study.category}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-blue py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Inspired by what you see?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Let's create something extraordinary together.
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
