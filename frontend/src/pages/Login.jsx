import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("student"); // student, teacher, admin
  const [formData, setFormData] = useState({
    username: "",
    prn: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginType === "student") {
      const student = {
        username: "Rohit@123",
        prn: "86688359052023",
        password: "Rohit123",
        name: "Rohit Patil",
        program: "AIML-Artificial Intelligence & Machine Learning",
      };

      if (
        formData.username === student.username &&
        formData.prn === student.prn &&
        formData.password === student.password
      ) {
        navigate("/dashboard", { state: { student } });
      } else {
        alert("Invalid student credentials! Please try again.");
      }
    } else if (loginType === "teacher") {
      const teacher = {
        username: "Teacher@123",
        password: "Teacher123",
        name: "John Doe",
        department: "Computer Science",
        semesters: [1, 2], // semesters teacher is handling
        subjects: {
          1: ["Physics", "Chemistry", "EM-1"],
          2: ["Engineering Graphics", "EM-2", "DBMS"],
        },
      };

      if (
        formData.username === teacher.username &&
        formData.password === teacher.password
      ) {
        navigate("/teacherdashboard", { state: { teacher } });
      } else {
        alert("Invalid teacher credentials! Please try again.");
      }
    }
  };

  // Placeholder values based on loginType
  const placeholders = {
    student: {
      username: "Rohit@123",
      prn: "86688359052023",
      password: "Rohit123",
    },
    teacher: {
      username: "Teacher@123",
      password: "Teacher123",
    },
    admin: {
      username: "",
      password: "",
    },
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh", backgroundColor: "#F7E5F3" }}
    >
      <div
        className="card p-4"
        style={{
          width: "400px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div className="d-flex justify-content-around mb-3">
          {["student", "teacher", "admin"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setLoginType(type)}
              className={`btn ${
                loginType === type ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <h3 className="text-center mb-4" style={{ color: "#3E1E68" }}>
          {loginType.charAt(0).toUpperCase() + loginType.slice(1)} Login
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder={placeholders[loginType].username}
              required
            />
          </div>

          {loginType === "student" && (
            <div className="mb-3">
              <label htmlFor="prn" className="form-label">
                PRN Number
              </label>
              <input
                type="text"
                className="form-control"
                id="prn"
                name="prn"
                value={formData.prn}
                onChange={handleChange}
                placeholder={placeholders[loginType].prn}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={placeholders[loginType].password}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{ backgroundColor: "#E45A92", color: "#fff" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
