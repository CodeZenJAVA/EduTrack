import { FaLock, FaUnlock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SemesterSection({ semestersUnlocked = 2 }) {
  const navigate = useNavigate();
  const years = [1, 2, 3, 4];

  const handleSemClick = (semNumber, unlocked) => {
    if (unlocked) {
      navigate(`/subjects/${semNumber}`);
    }
  };

  return (
    <div className="container my-4">
      <h3 className="fw-bold mb-4" style={{ color: "#3E1E68" }}>
        Your Program Semesters
      </h3>
      <div className="row g-4">
        {years.map((year) => (
          <div key={year} className="col-12 col-md-6 col-lg-3">
            <div
              className="p-3 rounded shadow text-center semester-card"
              style={{ backgroundColor: "#F7E5F3", transition: "transform 0.3s, box-shadow 0.3s" }}
            >
              <h5 className="fw-bold mb-3">Year {year}</h5>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {[1, 2].map((sem) => {
                  const semNumber = (year - 1) * 2 + sem;
                  const unlocked = semNumber <= semestersUnlocked;
                  return (
                    <button
                      key={semNumber}
                      onClick={() => handleSemClick(semNumber, unlocked)}
                      className="p-3 rounded border-0 d-flex flex-column align-items-center justify-content-center semester-btn"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: unlocked ? "#E45A92" : "#ddd",
                        color: "#fff",
                        cursor: unlocked ? "pointer" : "not-allowed",
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                    >
                      <span>Sem {semNumber}</span>
                      {unlocked ? <FaUnlock /> : <FaLock />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for hover effects */}
      <style jsx>{`
        .semester-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .semester-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default SemesterSection;
