import { useLocation, useNavigate } from "react-router-dom";

function TeacherSubjects() {
  const location = useLocation();
  const navigate = useNavigate();
  const subjects = location.state?.subjects || [];

  const handleSubjectClick = (subjectName) => {
    navigate(`/teachersubjectdetails/${subjectName}`, { state: { subjectName } });
  };

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-center" style={{ color: "#3E1E68" }}>
        Subjects
      </h3>
      <div className="row g-4">
        {subjects.map((sub, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 rounded shadow text-center"
              style={{ backgroundColor: "#F7E5F3", cursor: "pointer" }}
              onClick={() => handleSubjectClick(sub)}
            >
              <h5>{sub}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherSubjects;
