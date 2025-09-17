
import { useParams } from "react-router-dom";

function SubjectDetails() {
  const { semesterNumber, subjectName } = useParams();

  // Example subject data
  const subjectData = {
    "Physics": {
      attendance: 85, // %
      ut1: 18, ut2: 20, // out of 20
      practical: 25, assignments: 15, theory: 40, // marks
    },
    "Chemistry": {
      attendance: 90,
      ut1: 17, ut2: 19,
      practical: 22, assignments: 14, theory: 38,
    },
    "EM-1": {
      attendance: 80,
      ut1: 16, ut2: 18,
      practical: 20, assignments: 12, theory: 35,
    },
    // Add other subjects similarly
  };

  const data = subjectData[subjectName];

  const totalMarks = (data?.ut1 || 0) + (data?.ut2 || 0) + (data?.practical || 0) + (data?.assignments || 0) + (data?.theory || 0);
  const obtainedMarks = totalMarks; // for demo purpose
  const overallProgress = totalMarks ? (obtainedMarks / totalMarks) * 100 : 0;

  if (!data) return <p className="text-center mt-5">No data available for this subject.</p>;

  return (
    <div className="container my-4">
      <h3 className="fw-bold mb-4" style={{ color: "#3E1E68" }}>
        {subjectName} - Semester {semesterNumber}
      </h3>

      <div className="row g-4">
        {/* Attendance */}
        <div className="col-12 col-md-6">
          <div className="p-4 rounded shadow" style={{ backgroundColor: "#F7E5F3" }}>
            <h5 className="fw-bold mb-3">Attendance</h5>
            <p>{data.attendance}%</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${data.attendance}%`, backgroundColor: "#E45A92" }}
                aria-valuenow={data.attendance}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        {/* UT & Assignments */}
        <div className="col-12 col-md-6">
          <div className="p-4 rounded shadow" style={{ backgroundColor: "#F7E5F3" }}>
            <h5 className="fw-bold mb-3">Marks</h5>
            <p>UT-1: {data.ut1} / 20</p>
            <p>UT-2: {data.ut2} / 20</p>
            <p>Practical: {data.practical} / 25</p>
            <p>Assignments: {data.assignments} / 15</p>
            <p>Theory Exam: {data.theory} / 40</p>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="col-12">
          <div className="p-4 rounded shadow" style={{ backgroundColor: "#F7E5F3" }}>
            <h5 className="fw-bold mb-3">Overall Progress</h5>
            <div className="progress" style={{ height: "30px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${overallProgress}%`, backgroundColor: "#3E1E68" }}
                aria-valuenow={overallProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {Math.round(overallProgress)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectDetails;
