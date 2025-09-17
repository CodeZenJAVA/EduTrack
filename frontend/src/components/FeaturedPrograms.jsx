function FeaturedPrograms() {
  const programs = [
    {
      name: "AIML",
      description: "Learn Artificial Intelligence & Machine Learning to build smart applications."
    },
    {
      name: "COMPUTER SCIENCE",
      description: "Explore core computer science concepts and software development skills."
    },
    {
      name: "COMPUTER AND ELECTRONICS",
      description: "Combine computing and electronics to design intelligent systems."
    },
    {
      name: "MECHANICAL",
      description: "Understand machines, mechanics, and industrial systems engineering."
    },
    {
      name: "MECHTRONICS",
      description: "Integrate mechanical, electronics, and control systems for automation."
    },
    {
      name: "ELECTRONICS",
      description: "Dive into circuits, devices, and modern electronics technology."
    },
  ];

  return (
    <section className="py-5" id="programs" style={{ backgroundColor: "#FFACAC" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#3E1E68" }}>
          Featured Programs
        </h2>
        <div className="row g-4">
          {programs.map((program, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card text-center p-4 h-100"
                style={{
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, #ffffff, #ffe6f0)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                }}
              >
                <h5 className="fw-bold mb-3" style={{ color: "#5D2F77" }}>
                  {program.name}
                </h5>
                <p className="text-muted mb-4">
                  {program.description}
                </p>
                <a
                  href="#"
                  className="btn fw-bold"
                  style={{ backgroundColor: "#E45A92", color: "#fff" }}
                >
                  See Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;
