import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Subjects from "./pages/Subjects.jsx";
import SubjectDetails from "./pages/SubjectDetails.jsx";
import Portfolio from "./pages/Portfolio.jsx";

function AppWrapper() {
  const location = useLocation();

  // Show Navbar only on home and login pages
  const showNavbar = location.pathname === "/" || location.pathname === "/login";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subjects/:semesterNumber" element={<Subjects />} />
        <Route
          path="/subjects/:semesterNumber/:subjectName"
          element={<SubjectDetails />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
