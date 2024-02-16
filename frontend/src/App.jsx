import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import FeaturesPage from "./screens/FeaturesPage";
import AboutUs from "./screens/AboutUs";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import Dashboard from "./screens/Dashboard";
import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/FeaturesPage" element={<FeaturesPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="" element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
