const Events = () => {
  return (
    <>
      <div id="events" className="flex flex-col items-start h-screen">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Events
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 md:w-24 h-[1px]" />
          <p className="text-white text-sm md:text-lg font-semibold ml-3">
            List
          </p>
        </div>
      </div>
    </>
  );
};

export default Events;
