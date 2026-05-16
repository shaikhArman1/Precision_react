import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";

// Dashboard
import DashboardLayout from "./components/dashboard/DashboardLayout";
import OverviewTab from "./components/dashboard/OverviewTab";
import ProjectsTab from "./components/dashboard/ProjectsTab";
import MetricsTab from "./components/dashboard/MetricsTab";
import ClientsTab from "./components/dashboard/ClientsTab";
import ProfileTab from "./components/dashboard/ProfileTab";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0A1128",
              color: "#fff",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "12px 16px",
            },
            success: {
              iconTheme: { primary: "#22c55e", secondary: "#fff" },
            },
            error: {
              iconTheme: { primary: "#ef4444", secondary: "#fff" },
            },
          }}
        />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<OverviewTab />} />
            <Route path="projects" element={<ProjectsTab />} />
            <Route path="metrics" element={<MetricsTab />} />
            <Route path="clients" element={<ClientsTab />} />
            <Route path="profile" element={<ProfileTab />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;