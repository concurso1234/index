import { useEffect, useState } from "react";
import arrowImage from "../../public/arrow.png";
import W3Icons from "./W3Icons";

const texts = [
  "March 1st 2024",
  "St Joseph's College, Pilathara",
  "Department of Computer Applications",
];

const Container = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <div>
        <W3Icons />
      </div>
      <div className="flex flex-col items-center w-full mt-6 md:mt-0 h-[24rem] md:h-[38rem]">
        <h1 className="text-white text-center mb-1 text-base md:text-2xl">
          {texts.map((text, index) => (
            <span
              key={index}
              className={index === textIndex ? "fade" : "hidden"}
            >
              {text}
            </span>
          ))}
        </h1>
        <h1 className="text-5xl lg:text-8xl font-bold bg-gradient-to-b text-transparent bg-clip-text from-blue-500 to-purple-500">
          Concurso '24
        </h1>
        <h3 className="text-white mt-2 text-lg md:text-2xl lg:text-4xl font-semibold">
          Inter-Collegiate IT FEST
        </h3>
        <div className="relative">
          <button className="mt-6 outline-none text-white text-lg lg:text-xl border-[#EB7EF1] border-2 rounded-md p-2 md:p-3 uppercase font-semibold hover:bg-[#EB7EF1] hover:border-transparent hover:text-gray-900 transition duration-300 ease-in-out">
            <a href="https://forms.gle/qm2nvPdCKPs5c1LZ7" target="_blank">
              Register Now
            </a>
          </button>
          <img
            className="absolute top-12 -right-4 md:-right-6 w-5 md:w-10"
            src={arrowImage}
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
};

export default Container;
