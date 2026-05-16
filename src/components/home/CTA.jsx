import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="gradient-blue py-20 lg:py-24">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
          Ready to refine your narrative?
        </h2>
        <p className="mt-4 text-white/70 text-lg max-w-lg mx-auto">
          We are currently accepting new projects for Q3 2024. Let's build
          something intentional together.
        </p>
        <Link to="/contact" className="btn-white inline-block mt-8">
          Start a Project
        </Link>
      </div>
    </section>
  );
}
