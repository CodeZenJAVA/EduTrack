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
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-center" style={{ color: "#3E1E68" }}>
        Semester {semesterNumber} Subjects
      </h3>

      {/* Subjects Grid */}
      <div className="row g-4 mb-5">
        {subjects.map((sub, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div
              onClick={() => handleSubjectClick(sub.name)}
              className="subject-card p-4 rounded shadow text-center"
              style={{
                backgroundColor: "#F7E5F3",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <h5 className="fw-bold mb-2">{sub.name}</h5>
              <p className="mb-0">{sub.faculty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Eligibility Section */}
      <div
        className="p-4 rounded shadow mb-4"
        style={{
          backgroundColor: "#FFE6F0",
          borderLeft: "5px solid #E45A92",
        }}
      >
        <h4 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
          Semester 1 Certificate Eligibility
        </h4>
        <ul className="mb-3" style={{ color: "#3E1E68", lineHeight: "1.6" }}>
          <li>Student must have completed all subjects in Semester 1.</li>
          <li>Minimum attendance of 75% in each subject is required.</li>
          <li>All assignments and lab submissions must be completed.</li>
          <li>Clear all internal assessments and exams for Semester 1.</li>
        </ul>

        {/* Certification Progress Bar */}
        <div style={{ backgroundColor: "#ddd", borderRadius: "10px", height: "25px" }}>
          <div
            style={{
              width: "60%", // Static 60%
              height: "100%",
              backgroundColor: "#E45A92",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            60%
          </div>
        </div>
      </div>

      {/* Inline CSS for hover effects */}
      <style jsx>{`
        .subject-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

export default Subjects;
