import W3Icons from "./W3Icons";

const Container = () => {
  return (
    <>
      <div>
        <W3Icons />
      </div>
      <div className="flex flex-col items-center w-full h-screen">
        <h1 className="text-8xl font-bold bg-gradient-to-b text-transparent bg-clip-text from-blue-500 to-purple-500">
          Concurso '24
        </h1>
        <h3 className="text-white text-3xl font-semibold">
          National Level IT-FEST
        </h3>
      </div>
    </>
  );
};

export default Container;
