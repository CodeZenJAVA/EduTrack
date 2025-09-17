import { useNavigate } from "react-router-dom";

function TeacherSemesterSection({ semesters, subjects }) {
  const navigate = useNavigate();

  // Year-wise mapping
  const yearWiseSemesters = [
    { year: 1, sems: [1] },
    { year: 2, sems: [2] },
    { year: 3, sems: [4] },
  ];

  const handleSemesterClick = (semNumber) => {
    navigate(`/teachersubjects/${semNumber}`, {
      state: { subjects: subjects[semNumber] || [] },
    });
  };

  return (
    <div className="container my-4">
      <h3 className="fw-bold mb-4 text-center" style={{ color: "#3E1E68" }}>
        Semesters You Teach
      </h3>

      <div className="row g-4">
        {yearWiseSemesters.map((year) => (
          <div key={year.year} className="col-12 col-md-4">
            <div
              className="p-4 rounded shadow text-center semester-card"
              style={{
                backgroundColor: "#F7E5F3",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <h4 className="fw-bold mb-3" style={{ color: "#3E1E68" }}>
                Year {year.year}
              </h4>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {year.sems.map((sem) => (
                  <button
                    key={sem}
                    onClick={() => handleSemesterClick(sem)}
                    className="p-3 rounded border-0 d-flex flex-column align-items-center justify-content-center semester-btn"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#E45A92",
                      color: "#fff",
                      fontWeight: "bold",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                  >
                    Sem {sem}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover effects */}
      <style jsx>{`
        .semester-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .semester-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default TeacherSemesterSection;
