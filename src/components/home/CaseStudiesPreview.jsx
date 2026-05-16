import { Link } from "react-router-dom";
import case1 from "../../assets/minimal.png";
import case2 from "../../assets/case_study_watch_1776619519977.png";

const studies = [
  {
    image: case1,
    title: "Lumière Atelier",
    year: "2024",
    tags: "Editorial · Web Design · Branding",
  },
  {
    image: case2,
    title: "Kinetic Retail",
    year: "2025",
    tags: "Omnichannel · Marketing · Content",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="page-section">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-label">Selected Case Studies</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study) => (
            <Link
              key={study.title}
              to="/case-studies"
              className="group block rounded-xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{study.tags}</p>
                </div>
                <span className="text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                  {study.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
