import { useParams } from "react-router-dom";

function SubjectDetails() {
  const { semesterNumber, subjectName } = useParams();

  // Example subject data
  const subjectData = {
    Physics: {
      attendance: 85, // %
      ut1: 18,
      ut2: 20, // out of 20
      practical: 25,
      assignments: 15,
      theory: 40, // marks
      faculty: {
        name: "Dr. Sharma",
        email: "sharma@college.edu",
        photo: "https://via.placeholder.com/100", // placeholder image
      },
    },
    Chemistry: {
      attendance: 90,
      ut1: 17,
      ut2: 19,
      practical: 22,
      assignments: 14,
      theory: 38,
      faculty: {
        name: "Dr. Joshi",
        email: "joshi@college.edu",
        photo: "https://via.placeholder.com/100",
      },
    },
    "EM-1": {
      attendance: 80,
      ut1: 16,
      ut2: 18,
      practical: 20,
      assignments: 12,
      theory: 35,
      faculty: {
        name: "Prof. Patil",
        email: "patil@college.edu",
        photo: "https://via.placeholder.com/100",
      },
    },
  };

  const data = subjectData[subjectName];

  if (!data) return <p className="text-center mt-5">No data available for this subject.</p>;

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-center" style={{ color: "#3E1E68" }}>
        {subjectName} - Semester {semesterNumber}
      </h3>

      <div className="row g-4">
        {/* Attendance Card */}
        <div className="col-12 col-md-6">
          <div
            className="p-4 rounded shadow attendance-card"
            style={{ backgroundColor: "#F7E5F3", textAlign: "center" }}
          >
            <h5 className="fw-bold mb-3">Attendance</h5>
            <p className="mb-2" style={{ fontSize: "1.5rem", color: "#E45A92", fontWeight: "bold" }}>
              {data.attendance}%
            </p>
            <div className="progress" style={{ height: "20px", borderRadius: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${data.attendance}%`, backgroundColor: "#E45A92", borderRadius: "10px" }}
                aria-valuenow={data.attendance}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        {/* Marks Table */}
        <div className="col-12 col-md-6">
          <div
            className="p-4 rounded shadow"
            style={{ backgroundColor: "#F7E5F3" }}
          >
            <h5 className="fw-bold mb-3">Marks</h5>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Marks Obtained</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UT-1</td>
                  <td>{data.ut1}</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>UT-2</td>
                  <td>{data.ut2}</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Practical</td>
                  <td>{data.practical}</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Assignments</td>
                  <td>{data.assignments}</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Theory Exam</td>
                  <td>{data.theory}</td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Faculty Profile Card */}
        <div className="col-12">
          <div
            className="d-flex align-items-center p-4 rounded shadow faculty-card"
            style={{ backgroundColor: "#FFE6F0" }}
          >
            <img
              src={data.faculty.photo}
              alt={data.faculty.name}
              className="rounded-circle me-4"
              style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #E45A92" }}
            />
            <div>
              <h5 className="fw-bold mb-1" style={{ color: "#5D2F77" }}>
                {data.faculty.name}
              </h5>
              <p className="mb-0" style={{ color: "#3E1E68" }}>
                {data.faculty.email}
              </p>
              <p className="mb-0" style={{ color: "#3E1E68", fontStyle: "italic" }}>
                Subject Faculty
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for hover effects */}
      <style jsx>{`
        .attendance-card:hover,
        .faculty-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: 0.3s;
        }

        table th,
        table td {
          vertical-align: middle !important;
        }
      `}</style>
    </div>
  );
}

export default SubjectDetails;
