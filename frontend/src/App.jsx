import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Subjects from "./pages/Subjects.jsx";
import SubjectDetails from "./pages/SubjectDetails.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/subjects/:semesterNumber" element={<Subjects />} /> 
         <Route path="/subjects/:semesterNumber/:subjectName" element={<SubjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
