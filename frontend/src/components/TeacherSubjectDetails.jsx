import { useLocation, useState } from "react";

function TeacherSubjectDetails() {
  const location = useLocation();
  const { subjectName } = location.state || {};

  // Example students (hardcoded)
  const initialStudents = [
    { name: "Rohit Patil", prn: "86688359052023", attendance: 80, marks: { ut1: 18, ut2: 19 } },
    { name: "Amit Kumar", prn: "86688359052024", attendance: 75, marks: { ut1: 16, ut2: 17 } },
  ];

  const [students, setStudents] = useState(initialStudents);

  const handleAttendanceChange = (prn, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.prn === prn ? { ...s, attendance: value } : s))
    );
  };

  const handleMarksChange = (prn, field, value) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.prn === prn ? { ...s, marks: { ...s.marks, [field]: value } } : s
      )
    );
  };

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-center" style={{ color: "#3E1E68" }}>
        {subjectName} - Students
      </h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>PRN</th>
            <th>Attendance %</th>
            <th>UT1 Marks</th>
            <th>UT2 Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.prn}>
              <td>{s.name}</td>
              <td>{s.prn}</td>
              <td>
                <input
                  type="number"
                  value={s.attendance}
                  onChange={(e) =>
                    handleAttendanceChange(s.prn, Number(e.target.value))
                  }
                  style={{ width: "70px" }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={s.marks.ut1}
                  onChange={(e) =>
                    handleMarksChange(s.prn, "ut1", Number(e.target.value))
                  }
                  style={{ width: "50px" }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={s.marks.ut2}
                  onChange={(e) =>
                    handleMarksChange(s.prn, "ut2", Number(e.target.value))
                  }
                  style={{ width: "50px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherSubjectDetails;
