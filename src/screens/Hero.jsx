import Events from "../components/Events";
import Price from "../components/Price";
import Schedule from "../components/Schedule";

const Hero = () => {
  return (
    <div className="container space-y-20">
      <Events />
      <Schedule />
      <Price />
    </div>
  );
};

export default Hero;
