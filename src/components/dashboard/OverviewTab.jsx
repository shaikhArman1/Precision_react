import {
  TrendingUp,
  Users,
  FolderKanban,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Total Revenue",
    value: "$124k",
    change: "+12%",
    positive: true,
    icon: DollarSign,
    color: "bg-green-50 text-green-600",
    iconBg: "bg-green-100",
  },
  {
    title: "New Clients",
    value: "42",
    change: "+8%",
    positive: true,
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    title: "Active Projects",
    value: "12",
    change: "-2%",
    positive: false,
    icon: FolderKanban,
    color: "bg-purple-50 text-purple-600",
    iconBg: "bg-purple-100",
  },
];

const chartData = [
  { month: "Jan", projects: 4 },
  { month: "Feb", projects: 6 },
  { month: "Mar", projects: 5 },
  { month: "Apr", projects: 8 },
  { month: "May", projects: 12 },
  { month: "Jun", projects: 10 },
  { month: "Jul", projects: 14 },
  { month: "Aug", projects: 11 },
  { month: "Sep", projects: 16 },
  { month: "Oct", projects: 13 },
  { month: "Nov", projects: 18 },
  { month: "Dec", projects: 20 },
];

const recentProjects = [
  { name: "Lumière Atelier", category: "Brand Design", status: "Completed", date: "Dec 15, 2024", statusColor: "bg-green-100 text-green-700" },
  { name: "Kinetic Retail", category: "Marketing", status: "In Progress", date: "Jan 8, 2025", statusColor: "bg-blue-100 text-blue-700" },
  { name: "Nordic Spaces", category: "Web Design", status: "In Progress", date: "Feb 22, 2025", statusColor: "bg-blue-100 text-blue-700" },
  { name: "Vertex Analytics", category: "Product Design", status: "On Hold", date: "Mar 5, 2025", statusColor: "bg-amber-100 text-amber-700" },
  { name: "Aurelius Watch Co.", category: "E-Commerce", status: "Completed", date: "Nov 30, 2024", statusColor: "bg-green-100 text-green-700" },
];

export default function OverviewTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-navy-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-2.5 rounded-xl ${stat.iconBg}`}>
                  <Icon size={20} className={stat.color.split(" ")[1]} />
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                {stat.positive ? (
                  <ArrowUpRight size={16} className="text-green-600" />
                ) : (
                  <ArrowDownRight size={16} className="text-red-500" />
                )}
                <span
                  className={`text-sm font-medium ${
                    stat.positive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-gray-400">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-navy-900">Project Growth</h3>
            <p className="text-sm text-gray-400 mt-0.5">Monthly project count over 2024</p>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
            <TrendingUp size={14} />
            +32%
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} />
              <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0A1128",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "13px",
                }}
              />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#0066FF"
                strokeWidth={2.5}
                dot={{ fill: "#0066FF", strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, fill: "#0066FF" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Projects Table */}
      <div className="card overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-navy-900">Recent Projects</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Project Name
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Category
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentProjects.map((project) => (
                <tr key={project.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-navy-900">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {project.category}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {project.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
