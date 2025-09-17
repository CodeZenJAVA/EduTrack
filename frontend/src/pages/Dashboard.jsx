import Greeting from "../components/Greeting.jsx";
import Header from "../components/Header.jsx";
import SemesterSection from "../components/SemesterSection.jsx";


function Dashboard() {
  const studentName = "Amit Patil";
  const programName = "AIML-Artificial Intelligence & Machine Learning";

  return (
    <div>
      <Header studentName={studentName} programName={programName} />
      {/* Sidebar and Main Content will go here */}
      <SemesterSection semestersUnlocked={2} /> 
      <Greeting />
    </div>
  );
}

export default Dashboard;
