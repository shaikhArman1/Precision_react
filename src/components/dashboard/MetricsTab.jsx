import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, Target, Clock, CheckCircle2 } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 11000 },
  { month: "Apr", revenue: 18000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 19000 },
  { month: "Jul", revenue: 25000 },
  { month: "Aug", revenue: 21000 },
  { month: "Sep", revenue: 28000 },
  { month: "Oct", revenue: 24000 },
  { month: "Nov", revenue: 30000 },
  { month: "Dec", revenue: 35000 },
];

const clientGrowthData = [
  { month: "Jan", clients: 8 },
  { month: "Feb", clients: 12 },
  { month: "Mar", clients: 10 },
  { month: "Apr", clients: 15 },
  { month: "May", clients: 20 },
  { month: "Jun", clients: 18 },
  { month: "Jul", clients: 25 },
  { month: "Aug", clients: 22 },
  { month: "Sep", clients: 30 },
  { month: "Oct", clients: 28 },
  { month: "Nov", clients: 35 },
  { month: "Dec", clients: 42 },
];

const projectStatusData = [
  { name: "Completed", value: 45, color: "#22c55e" },
  { name: "Active", value: 30, color: "#0066FF" },
  { name: "On Hold", value: 15, color: "#f59e0b" },
  { name: "Cancelled", value: 10, color: "#ef4444" },
];

const kpis = [
  { title: "Avg. Project Duration", value: "6.2 weeks", icon: Clock, change: "-0.8w", positive: true },
  { title: "Client Retention", value: "94%", icon: Target, change: "+3%", positive: true },
  { title: "Completion Rate", value: "87%", icon: CheckCircle2, change: "+5%", positive: true },
  { title: "Revenue Growth", value: "+32%", icon: TrendingUp, change: "+8%", positive: true },
];

export default function MetricsTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold text-navy-900">Metrics</h2>
        <p className="text-sm text-gray-400 mt-1">Performance analytics and insights</p>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.title} className="card p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-50">
                  <Icon size={18} className="text-brand-600" />
                </div>
                <p className="text-sm text-gray-500 font-medium">{kpi.title}</p>
              </div>
              <p className="text-2xl font-bold text-navy-900 mt-3">{kpi.value}</p>
              <span className="text-xs text-green-600 font-medium">{kpi.change} from last quarter</span>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-navy-900 mb-1">Revenue Overview</h3>
          <p className="text-sm text-gray-400 mb-6">Monthly revenue breakdown</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
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
                  formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
                />
                <Bar dataKey="revenue" fill="#0066FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Client Growth Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-navy-900 mb-1">Client Growth</h3>
          <p className="text-sm text-gray-400 mb-6">Total clients over time</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={clientGrowthData}>
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
                  dataKey="clients"
                  stroke="#0066FF"
                  strokeWidth={2.5}
                  dot={{ fill: "#0066FF", strokeWidth: 0, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Project Status Pie Chart */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-1">Project Status Distribution</h3>
        <p className="text-sm text-gray-400 mb-6">Breakdown of all projects by current status</p>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="h-64 w-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-3">
            {projectStatusData.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="text-sm font-semibold text-navy-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
