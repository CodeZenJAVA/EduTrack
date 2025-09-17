import  { useState } from "react";

function Login() {
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
    console.log("Login data:", formData);
    alert("Login functionality will be implemented later.");
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
        <h3 className="text-center mb-4" style={{ color: "#3E1E68" }}>
          Student Login
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
              placeholder="Enter your username"
              required
            />
          </div>

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
              placeholder="Enter your PRN"
              required
            />
          </div>

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
              placeholder="Enter your password"
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
