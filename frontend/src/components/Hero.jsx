import heroImage from "../assets/hero.svg";

function Hero() {
  return (
    <>
      <section
        className="d-flex align-items-center"
        style={{ minHeight: "65vh", backgroundColor: "#5D2F77", color: "#fff" }}
      >
        <div className="container text-center text-lg-start">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Welcome to{" "}
                <span style={{ color: "#E45A92" }}>SSPM Engineering College</span>
              </h1>
              <p className="lead mb-4">
                Kankavli – Shaping Future Engineers with Quality Education and Skill Development.
              </p>
              <a
                href="#programs"
                className="btn fw-bold"
                style={{ backgroundColor: "#E45A92", color: "#fff" }}
              >
                Explore Programs
              </a>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 d-none d-lg-block text-center">
              <img
                src={heroImage}
                alt="Hero"
                className="img-fluid rounded"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
