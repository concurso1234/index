import collegePic from "../../public/college2.jpeg";
const About = () => {
  return (
    <>
      <div id="about" className="flex flex-col items-start">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          About
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 md:w-24 h-[1px]" />
          <p className="text-white text-sm md:text-lg font-semibold ml-3">
            Event & College
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row">
        <div className="w-64 md:min-w-64 h-64">
          <img
            src={collegePic}
            alt="college"
            className="w-full h-full rounded-lg shadow-stone-700 shadow-md"
          />
        </div>
        <div className="flex flex-col md:ml-8 mt-8 md:mt-0 text-white text-center md:text-left text-sm md:text-base">
          <p>
            <strong>Concurso</strong>, the esteemed IT fest, returns with a wave
            of anticipation and excitement. Renowned for its fusion of
            technology, creativity, and camaraderie, Concurso has left an
            indelible mark on the landscape of technological innovation. <br />
            Concurso emerged as a beacon of success, captivating participants
            and spectators alike with its vibrant atmosphere and cutting-edge
            showcases.
          </p>
          <p>
            <br />
            <strong>St. Joseph’s College Pilathara</strong>, nestled amidst the
            serene landscapes of northern Kerala, stands as a beacon of
            educational excellence since its establishment in 2005 by the
            Diocese of Kannur. <br />
            With a steadfast commitment to the holistic development of its
            students, the college strives to instill values of integrity,
            innovation, and compassion within the hearts and minds of the youth,
            shaping them into responsible global citizens and future leaders.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
