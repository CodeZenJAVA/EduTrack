import { useLocation } from "react-router-dom";
import Greeting from "../components/Greeting.jsx";
import Header from "../components/Header.jsx";
import SemesterSection from "../components/SemesterSection.jsx";

function Dashboard() {
  const location = useLocation();
  const student = location.state?.student || {
    name: "Student Name",
    program: "Program Name",
  };

  return (
    <div>
      <Header studentName={student.name} programName={student.program} />
      <SemesterSection semestersUnlocked={2} />
      <Greeting />
    </div>
  );
}

export default Dashboard;
