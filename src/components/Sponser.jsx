const Sponser = () => {
  return (
    <>
      <div id="sponser" className="flex flex-col items-start mt-10 mb-32">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Our Sponsers
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 md:w-24 h-[1px]" />
          <p className="text-white text-sm md:text-lg font-semibold ml-3">
            Our Parterns & Sponsers
          </p>
        </div>
        <div className="flex flex-wrap mt-7 justify-center items-center"></div>
      </div>
    </>
  );
};

export default Sponser;
