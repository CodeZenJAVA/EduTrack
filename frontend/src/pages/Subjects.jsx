
import { useParams, useNavigate } from "react-router-dom";

function Subjects() {
  const { semesterNumber } = useParams();
  const navigate = useNavigate();

  const subjectsData = {
    1: [
      { name: "Physics", faculty: "Dr. Sharma" },
      { name: "Chemistry", faculty: "Dr. Joshi" },
      { name: "EM-1", faculty: "Prof. Patil" },
    ],
    2: [
      { name: "Engineering Graphics", faculty: "Prof. More" },
      { name: "EM-2", faculty: "Prof. Kulkarni" },
      { name: "DBMS", faculty: "Dr. Deshmukh" },
    ],
  };

  const subjects = subjectsData[semesterNumber] || [];

  const handleSubjectClick = (subjectName) => {
    navigate(`/subjects/${semesterNumber}/${subjectName}`);
  };

  return (
    <div className="container my-4">
      <h3 className="fw-bold mb-4" style={{ color: "#3E1E68" }}>
        Semester {semesterNumber} Subjects
      </h3>
      <div className="row g-4">
        {subjects.map((sub, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div
              onClick={() => handleSubjectClick(sub.name)}
              className="p-4 rounded shadow text-center"
              style={{
                backgroundColor: "#F7E5F3",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <h5 className="fw-bold">{sub.name}</h5>
              <p className="mb-0">{sub.faculty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
