function TeacherHeader({ name, department }) {
  return (
    <div
      className="p-5 text-center shadow rounded mb-4"
      style={{
        background: "linear-gradient(135deg, #E45A92, #5D2F77)",
        color: "#fff",
      }}
    >
      <h2 className="fw-bold">{name}</h2>
      <p className="mb-0" style={{ fontSize: "1.1rem" }}>
        {department} Department
      </p>
    </div>
  );
}

export default TeacherHeader;
