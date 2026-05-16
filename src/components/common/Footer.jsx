import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Privacy", path: "#" },
  { name: "Terms", path: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider text-navy-900">PRECISION</span>
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Precision Agency. All rights reserved.
            </span>
          </div>

          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
