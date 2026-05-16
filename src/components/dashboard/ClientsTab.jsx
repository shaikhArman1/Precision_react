import { useState } from "react";
import { Search, Mail, Phone, MoreVertical } from "lucide-react";

const clientsData = [
  { id: 1, name: "Elena Rossi", company: "Fashion House Paris", email: "elena@fashionhouse.com", phone: "+33 1 2345 6789", projects: 3, status: "Active", avatar: "ER" },
  { id: 2, name: "James Mitchell", company: "KR Group", email: "james@krgroup.com", phone: "+1 555 0142", projects: 2, status: "Active", avatar: "JM" },
  { id: 3, name: "Astrid Lindgren", company: "Nordic Interior AB", email: "astrid@nordicinterior.se", phone: "+46 70 123 4567", projects: 1, status: "Active", avatar: "AL" },
  { id: 4, name: "David Chen", company: "Vertex Inc.", email: "david@vertexinc.com", phone: "+1 555 0198", projects: 2, status: "Inactive", avatar: "DC" },
  { id: 5, name: "Marcus Weber", company: "Aurelius Group", email: "marcus@aurelius.com", phone: "+49 30 1234567", projects: 4, status: "Active", avatar: "MW" },
  { id: 6, name: "Sarah Thompson", company: "PulseFit Ltd.", email: "sarah@pulsefit.io", phone: "+44 20 7946 0958", projects: 1, status: "Active", avatar: "ST" },
  { id: 7, name: "Robert Park", company: "Horizon Financial", email: "robert@horizon.com", phone: "+1 555 0167", projects: 3, status: "Active", avatar: "RP" },
  { id: 8, name: "Lisa Nakamura", company: "GreenTech Co.", email: "lisa@greentech.co", phone: "+81 3 1234 5678", projects: 1, status: "Active", avatar: "LN" },
];

const avatarColors = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-green-500 to-green-600",
  "from-amber-500 to-amber-600",
  "from-rose-500 to-rose-600",
  "from-cyan-500 to-cyan-600",
  "from-indigo-500 to-indigo-600",
  "from-teal-500 to-teal-600",
];

export default function ClientsTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = clientsData.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || c.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-navy-900">Clients</h2>
          <p className="text-sm text-gray-400 mt-1">{clientsData.length} total clients</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 gap-2">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none w-40 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["All", "Active", "Inactive"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === f
                ? "bg-brand-600 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-brand-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Client Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((client, index) => (
          <div key={client.id} className="card p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${
                    avatarColors[index % avatarColors.length]
                  } flex items-center justify-center text-white text-sm font-bold`}
                >
                  {client.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900">{client.name}</h3>
                  <p className="text-xs text-gray-400">{client.company}</p>
                </div>
              </div>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  client.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {client.status}
              </span>
            </div>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail size={14} className="text-gray-400" />
                <span className="truncate">{client.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Phone size={14} className="text-gray-400" />
                {client.phone}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {client.projects} project{client.projects !== 1 ? "s" : ""}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No clients found</p>
        </div>
      )}
    </div>
  );
}
