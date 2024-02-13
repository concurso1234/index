import Timeline from "./Timeline";

const Schedule = () => {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Schedule
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-20 md:w-32 h-[1px]" />
          <p className="text-white text-sm md:text-lg font-semibold ml-3"></p>
        </div>
      </div>
      <div>
        <Timeline />
      </div>
    </>
  );
};

export default Schedule;
