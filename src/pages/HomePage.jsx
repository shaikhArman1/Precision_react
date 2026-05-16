import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import Toolkit from "../components/home/Toolkit";
import CaseStudiesPreview from "../components/home/CaseStudiesPreview";
import CTA from "../components/home/CTA";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Toolkit />
      <CaseStudiesPreview />
      <CTA />
      <Footer />
    </div>
  );
}
