import CTA from "../components/CTA.jsx";
import FeaturedPrograms from "../components/FeaturedPrograms.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import PlacementStories from "../components/PlacementStories.jsx";
function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPrograms/>
      <PlacementStories/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default Home;
