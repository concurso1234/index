import About from "../components/About";
import Events from "../components/Events";
import Schedule from "../components/Schedule";
import Sponser from "../components/Sponser";

const Hero = () => {
  return (
    <div className="container space-y-20">
      <Events />
      <Schedule />
      <Sponser />
      <About />
    </div>
  );
};

export default Hero;
