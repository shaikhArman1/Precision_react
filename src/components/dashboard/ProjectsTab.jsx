import { useState } from "react";
import { Search, Filter, Calendar, MoreVertical } from "lucide-react";

const allProjects = [
  { id: 1, name: "Lumière Atelier", client: "Fashion House Paris", category: "Brand Design", status: "Completed", deadline: "Dec 15, 2024", budget: "$18,000", progress: 100 },
  { id: 2, name: "Kinetic Retail", client: "KR Group", category: "Marketing", status: "Active", deadline: "Mar 30, 2025", budget: "$24,500", progress: 65 },
  { id: 3, name: "Nordic Spaces", client: "Nordic Interior AB", category: "Web Design", status: "Active", deadline: "Apr 15, 2025", budget: "$32,000", progress: 40 },
  { id: 4, name: "Vertex Analytics", client: "Vertex Inc.", category: "Product Design", status: "On Hold", deadline: "May 1, 2025", budget: "$15,000", progress: 20 },
  { id: 5, name: "Aurelius Watch Co.", client: "Aurelius Group", category: "E-Commerce", status: "Completed", deadline: "Nov 30, 2024", budget: "$28,000", progress: 100 },
  { id: 6, name: "Pulse Fitness App", client: "PulseFit Ltd.", category: "Product Design", status: "Active", deadline: "Jun 20, 2025", budget: "$42,000", progress: 55 },
  { id: 7, name: "Horizon Bank Rebrand", client: "Horizon Financial", category: "Brand Design", status: "Completed", deadline: "Oct 10, 2024", budget: "$35,000", progress: 100 },
  { id: 8, name: "EcoTrack Dashboard", client: "GreenTech Co.", category: "Web Design", status: "Active", deadline: "Jul 5, 2025", budget: "$20,000", progress: 30 },
];

const filters = ["All", "Active", "Completed", "On Hold"];

export default function ProjectsTab() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allProjects.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.status === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active": return "bg-blue-100 text-blue-700";
      case "Completed": return "bg-green-100 text-green-700";
      case "On Hold": return "bg-amber-100 text-amber-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-navy-900">Projects</h2>
          <p className="text-sm text-gray-400 mt-1">{allProjects.length} total projects</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 gap-2">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none w-40 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeFilter === filter
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-600 hover:border-brand-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <div key={project.id} className="card p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusStyle(project.status)}`}>
                {project.status}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={16} />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-navy-900">{project.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{project.client}</p>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-500">{project.category}</span>
              <span className="font-semibold text-navy-900">{project.budget}</span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full gradient-blue rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-4 text-xs text-gray-400">
              <Calendar size={12} />
              {project.deadline}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No projects found</p>
          <p className="text-sm mt-1">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
}
