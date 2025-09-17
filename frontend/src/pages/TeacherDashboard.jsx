import TeacherHeader from "../components/TeacherHeader";
import TeacherSemesterSection from "../components/TeacherSemesterSection";

function TeacherDashboard() {
  // Hardcoded teacher info
  const teacher = {
    name: "John Doe",
    department: "Computer Science",
  };

  // Hardcoded subjects for each semester (key = semester number)
  const subjects = {
    1: [{ name: "Physics" }, { name: "Chemistry" }, { name: "EM-1" }],   // Year 1 - Sem 1
    2: [{ name: "Engineering Graphics" }, { name: "DBMS" }, { name: "EM-2" }], // Year 2 - Sem 1
    4: [{ name: "AI" }, { name: "ML" }], // Year 3 - Sem 2
  };

  // Semesters assigned to teacher
  const semesters = [1, 2, 4]; // matches keys above

  return (
    <div>
      <TeacherHeader name={teacher.name} department={teacher.department} />
      <TeacherSemesterSection semesters={semesters} subjects={subjects} />
    </div>
  );
}

export default TeacherDashboard;
