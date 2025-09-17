
function Footer() {
  return (
    <footer style={{ backgroundColor: "#3E1E68", color: "#fff" }} className="pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* About / College info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">SSPM Engineering College</h5>
            <p>Kankavli, Maharashtra</p>
            <p>Shaping Future Engineers with Quality Education</p>
          </div>

          {/* Contact info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p>Email: info@sspmcollege.edu.in</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: Near Bus Stand, Kankavli, Maharashtra</p>
          </div>

          {/* Social links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "#E45A92" }} />

        <p className="text-center mb-0" style={{ color: "#FFACAC" }}>
          &copy; {new Date().getFullYear()} SSPM Engineering College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
