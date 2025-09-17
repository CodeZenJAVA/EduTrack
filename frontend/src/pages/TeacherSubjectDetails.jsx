import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

function TeacherSubjectDetails() {
  const { semesterNumber } = useParams();
  const location = useLocation();
  const subjects = location.state?.subjects || [];

  // Dummy students for each subject
  const initialStudents = [
    {
      name: "Rohit Patil",
      prn: "86688359052023",
      attendance: 80,
      ut1: 18,
      ut2: 19,
      practical: 22,
      assignments: 15,
      theory: 35,
    },
    {
      name: "Sneha Joshi",
      prn: "86688359052024",
      attendance: 85,
      ut1: 19,
      ut2: 20,
      practical: 23,
      assignments: 14,
      theory: 38,
    },
    {
      name: "Amit Sharma",
      prn: "86688359052025",
      attendance: 75,
      ut1: 16,
      ut2: 17,
      practical: 20,
      assignments: 13,
      theory: 30,
    },
  ];

  const [students, setStudents] = useState(initialStudents);

  const handleChange = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = field === "name" || field === "prn" ? value : Number(value);
    setStudents(updated);
  };

  if (!subjects.length) {
    return <p className="text-center mt-5">No subjects assigned for this semester.</p>;
  }

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-center" style={{ color: "#3E1E68" }}>
        Semester {semesterNumber} - Subjects Overview
      </h3>

      {subjects.map((subject, i) => (
        <div key={i} className="mb-5 p-4 rounded shadow" style={{ backgroundColor: "#F7E5F3" }}>
          <h4 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
            {subject.name}
          </h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>PRN</th>
                <th>Attendance %</th>
                <th>UT1</th>
                <th>UT2</th>
                <th>Practical</th>
                <th>Assignments</th>
                <th>Theory</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx}>
                  <td>
                    <input
                      type="text"
                      value={student.name}
                      onChange={(e) => handleChange(idx, "name", e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={student.prn}
                      onChange={(e) => handleChange(idx, "prn", e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={student.attendance}
                      onChange={(e) => handleChange(idx, "attendance", e.target.value)}
                      className="form-control"
                      min="0"
                      max="100"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={student.ut1}
                      onChange={(e) => handleChange(idx, "ut1", e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={student.ut2}
                      onChange={(e) => handleChange(idx, "ut2", e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={student.practical}
                      onChange={(e) => handleChange(idx, "practical", e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={student.assignments}
                      onChange={(e) => handleChange(idx, "assignments", e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={student.theory}
                      onChange={(e) => handleChange(idx, "theory", e.target.value)}
                      className="form-control"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default TeacherSubjectDetails;
