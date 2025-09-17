import boyProfileImage from "../assets/boyProfile.svg";
import girlProfileImage from "../assets/girlProfile.svg";
function PlacementStories() {
  const stories = [
    {
      name: "Rahul Patil",
      company: "TCS",
      image: boyProfileImage,
      desc: "Secured a software developer role with excellent package.",
    },
    {
      name: "Sneha Desai",
      company: "Infosys",
      image: girlProfileImage,
      desc: "Placed in Infosys as a system analyst after graduation.",
    },
    {
      name: "Amit Kulkarni",
      company: "Wipro",
      image: boyProfileImage,
      desc: "Joined Wipro as a backend developer with great skills.",
    },
    {
      name: "Pooja Sharma",
      company: "Tech Mahindra",
      image: girlProfileImage,
      desc: "Placed in Tech Mahindra with amazing academic record.",
    },
    {
      name: "Riya Patil",
      company: "Capgemini",
      image: girlProfileImage,
      desc: "Placed as Software Engineer at Capgemini.",
    },
    {
      name: "Vikram Joshi",
      company: "Infosys",
      image: boyProfileImage,
      desc: "Joined Infosys with great performance in projects.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#F7E5F3" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#3E1E68" }}>
          Placement Stories
        </h2>

        <div className="row g-4">
          {stories.map((story, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card text-center p-4 h-100"
                style={{
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, #fff, #ffe6f0)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover", margin: "0 auto" }}
                />
                <h5 className="fw-bold mb-1" style={{ color: "#5D2F77" }}>
                  {story.name}
                </h5>
                <p className="text-muted mb-2">{story.company}</p>
                <p className="text-muted">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlacementStories;
