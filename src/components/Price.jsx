const Price = () => {
  return (
    <>
      <div className="flex flex-col items-start h-screen">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Prizes
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-20 md:w-28 h-[1px]" />
          <p className="text-white text-sm md:text-lg font-semibold ml-3">
            Cash Prizes and Certificates
          </p>
        </div>
      </div>
    </>
  );
};

export default Price;
