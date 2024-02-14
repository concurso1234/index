import { useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { GiTreasureMap } from "react-icons/gi";
import { BiSolidJoystick } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const Events = () => {
  const [showRules, setShowRules] = useState(false);

  const eventList = [
    {
      icon: <FaLaptop color="#fff" size={45} />,
      title: "Code Racer",
      subTitle: "Language: C",
      fPrice: 5000,
      sPrice: 2000,
    },
    {
      icon: <FaBug color="#fff" size={45} />,
      title: "Bug Hunt",
      subTitle: "Language: C",
      fPrice: 4000,
      sPrice: 2000,
    },
    {
      icon: <FaLightbulb color="#fff" size={45} />,
      title: "Itrix",
      subTitle: "IT Quiz",
      fPrice: 3000,
      sPrice: 1500,
    },
    {
      icon: <GiTreasureMap color="#fff" size={45} />,
      title: "Hazine Hunt",
      subTitle: "Treasure Hunt",
      prize: 4000,
      // sPrice: "-",
    },
    {
      icon: <BiSolidJoystick color="#fff" size={45} />,
      title: "Gaming",
      subTitle: "e-Football 2024",
      fPrice: 2500,
      sPrice: 1000,
    },
  ];

  return (
    <>
      <div
        id="events"
        className="relative flex flex-col items-start md:mt-10 mb-32"
      >
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Events
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 md:w-24 h-[1px]" />
          <p className="text-white text-sm md:text-lg font-semibold ml-3">
            List
          </p>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap  justify-between w-full mt-8">
          {eventList.map(
            ({ icon, title, subTitle, fPrice, sPrice, prize }, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mt-4"
              >
                <div
                  className="flex flex-col items-center w-60 h-64 md:w-[12rem] bg-[#242424] p-4 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform-gpu hover:scale-110 cursor-pointer"
                  onClick={() => setShowRules(!showRules)}
                >
                  <div className="p-5">{icon}</div>
                  <h1 className="text-xl text-white uppercase">{title}</h1>
                  <p className="text-sm text-gray-300">{subTitle}</p>
                  {fPrice ? (
                    <p className="text-white mt-5">
                      First Prize: <span className="font-bold">₹{fPrice}</span>
                    </p>
                  ) : (
                    <p className="text-white mt-5">
                      Prize Pool: <span className="font-bold">₹{prize}</span>
                    </p>
                  )}
                  {sPrice && (
                    <p className="text-white mt-1">
                      Second Prize:{" "}
                      <span className="font-semibold">₹{sPrice}</span>
                    </p>
                  )}
                </div>
                {/* {showRules && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-start rounded-2xl">
                    <IoCloseSharp
                      className="absolute top-3 right-3 cursor-pointer"
                      color="#fff"
                      size={20}
                      onClick={() => setShowRules(!showRules)}
                    />
                    <h1 className="text-white mt-7 font-semibold text-2xl">
                      {title} Rules
                    </h1>
                  </div>
                )} */}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
