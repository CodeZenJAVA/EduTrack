
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ studentName, programName }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navigate to Portfolio page and pass student info
    navigate("/portfolio", { state: { student: { name: studentName, program: programName } } });
  };

  return (
    <section
      className="d-flex align-items-center justify-content-between px-4"
      style={{
        minHeight: "25vh",
        backgroundColor: "#5D2F77",
        color: "#fff",
        borderRadius: "0 0 30px 30px",
        marginBottom: "30px",
      }}
    >
      {/* Program Info */}
      <div>
        <h2 className="fw-bold">{programName}</h2>
        <p style={{ maxWidth: "500px", fontSize: "1.1rem" }}>
          Welcome {studentName}! This program will guide you through your learning journey.
        </p>
      </div>

      {/* My Profile Button */}
      <div className="text-center">
        <button
          onClick={handleProfileClick}
          className="btn fw-bold d-flex align-items-center"
          style={{ backgroundColor: "#E45A92", color: "#fff" }}
        >
          <FaUserCircle size={24} className="me-2" />
          My Profile
        </button>
      </div>
    </section>
  );
}

export default Header;
