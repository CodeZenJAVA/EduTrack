import { useLocation, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student || {
    name: "Student Name",
    program: "Program Name",
  };

  // Semester-wise data
  const semesterData = [
    { semester: "Sem 1", completed: 3, remaining: 0, certificate: true, backlogs: [] },
    { semester: "Sem 2", completed: 2, remaining: 1, certificate: true, backlogs: ["DBMS"] },
    { semester: "Sem 3", completed: 2, remaining: 1, certificate: false, backlogs: ["EM-2"] },
    { semester: "Sem 4", completed: 1, remaining: 2, certificate: false, backlogs: ["AI Lab", "DS"] },
    { semester: "Sem 5", completed: 0, remaining: 3, certificate: false, backlogs: ["ML", "NLP", "DL"] },
    { semester: "Sem 6", completed: 0, remaining: 3, certificate: false, backlogs: ["CV", "Robotics", "IoT"] },
    { semester: "Sem 7", completed: 0, remaining: 3, certificate: false, backlogs: ["Project 1", "Project 2", "Elective"] },
    { semester: "Sem 8", completed: 0, remaining: 3, certificate: false, backlogs: ["Final Project", "Elective", "Viva"] },
  ];

  // Pie chart for overall program completion
  const totalSemesters = semesterData.length;
  const completedSemesters = semesterData.filter(s => s.certificate).length;
  const pieData = [
    { name: "Completed", value: completedSemesters },
    { name: "Pending", value: totalSemesters - completedSemesters },
  ];
  const COLORS = ["#E45A92", "#ddd"];

  // Projects done by student
  const projects = [
    { name: "AI Chatbot", status: "Completed" },
    { name: "ML Model for Stock Prediction", status: "Completed" },
    { name: "Robotics Arm", status: "In Progress" },
  ];

  // Collect all backlogs
  const allBacklogs = semesterData.flatMap(s => s.backlogs.map(b => ({ semester: s.semester, subject: b })));

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold" style={{ color: "#3E1E68" }}>
          {student.name}'s Portfolio - {student.program}
        </h2>
        <button
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
          style={{ backgroundColor: "#5D2F77", color: "#fff" }}
        >
          Back to Dashboard
        </button>
      </div>

      {/* Semester Progress Bar Chart */}
      <div className="mb-5 p-4 rounded shadow" style={{ backgroundColor: "#F7E5F3" }}>
        <h4 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
          Semester-wise Course Progress
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={semesterData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="semester" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" stackId="a" fill="#E45A92" />
            <Bar dataKey="remaining" stackId="a" fill="#ddd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Certification Pie Chart */}
      <div className="mb-5 p-4 rounded shadow text-center" style={{ backgroundColor: "#FFE6F0" }}>
        <h4 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
          Overall Program Completion
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Certification Status Cards */}
      <div className="mb-5">
        <h4 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
          Certification Status
        </h4>
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {semesterData.map((sem) => (
            <div
              key={sem.semester}
              className="p-3 rounded shadow text-center"
              style={{
                width: "120px",
                backgroundColor: sem.certificate ? "#E45A92" : "#ddd",
                color: sem.certificate ? "#fff" : "#3E1E68",
                fontWeight: "bold",
                cursor: "default",
              }}
            >
              {sem.semester}
              <br />
              {sem.certificate ? "Certified" : "Pending"}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-5">
        <h4 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
          Projects
        </h4>
        <div className="row g-4">
          {projects.map((proj, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="p-4 rounded shadow text-center"
                style={{
                  backgroundColor: proj.status === "Completed" ? "#E45A92" : "#F7E5F3",
                  color: proj.status === "Completed" ? "#fff" : "#3E1E68",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "default",
                }}
              >
                <h5 className="fw-bold mb-2">{proj.name}</h5>
                <p>Status: {proj.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backlogs Section */}
      {allBacklogs.length > 0 && (
        <div className="mb-5">
          <h4 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
            Backlogs / Pending Subjects
          </h4>
          <div className="row g-3">
            {allBacklogs.map((b, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div
                  className="p-3 rounded shadow text-center"
                  style={{
                    backgroundColor: "#FDE2E4",
                    color: "#E45A92",
                    fontWeight: "bold",
                  }}
                >
                  {b.semester} <br /> {b.subject}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hover effect */}
      <style jsx>{`
        .shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

export default Portfolio;
