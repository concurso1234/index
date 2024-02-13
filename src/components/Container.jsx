import { useEffect, useState } from "react";
import W3Icons from "./W3Icons";

const Container = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "St Joseph's College, Pilathara",
    "Department of Computer Applications",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2800);

    return () => clearInterval(intervalId);
  }, [texts.length]);
  return (
    <>
      <div>
        <W3Icons />
      </div>
      <div className="flex flex-col items-center w-full h-[22rem] md:h-[38rem]">
        <h1 className="text-white text-2xl">
          <span className="fade">{texts[textIndex]}</span>
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-b text-transparent bg-clip-text from-blue-500 to-purple-500">
          Concurso '24
        </h1>
        <h3 className="text-white mt-2 text-sm md:text-2xl lg:text-4xl font-semibold">
          Inter-Collegiate IT FEST
        </h3>
        <div className="relative">
          <button className="mt-6 outline-none text-white text-[10px] md:text-lg lg:text-xl border-[#EB7EF1] border-2 rounded-md p-2 md:p-3 uppercase font-semibold hover:bg-[#EB7EF1] hover:border-transparent hover:text-gray-900 transition duration-300 ease-in-out">
            <a href="#">Register Now</a>
          </button>
          <img
            className="absolute top-12 -right-4 md:-right-6 w-5 md:w-10"
            src="/arrow.png"
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
};

export default Container;
