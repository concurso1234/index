import { useState } from "react";

const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <div className="flex justify-between items-center w-full bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <h3 className="text-sm font-bold md:text-xl">CONCURSO '24</h3>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 text-base">
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#">HOME</a>
            </li>
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#events">EVENTS</a>
            </li>
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#">ABOUT</a>
            </li>
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <div className="ml-[40px]">
            <button className="text-xs md:text-sm px-4 py-2 rounded-md cursor-pointer transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <a href="#">REGISTER</a>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div>
        <svg
          className="md:hidden block w-5 h-5 fill-current cursor-pointer mr-5"
          onClick={() => setShowToggle(!showToggle)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
        </svg>

        <div
          className={`absolute md:hidden top-12 right-4 bg-slate-600 rounded-md shadow-md w-32 transition-opacity duration-300 ${
            showToggle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-end text-sm p-2 space-y-2">
            <li className="cursor-pointer text-white hover:text-blue-500">
              <a href="www.google.com">HOME</a>
            </li>
            <li className="cursor-pointer text-white hover:text-blue-500">
              <a href="#">EVENTS</a>
            </li>
            <li className="cursor-pointer text-white hover:text-blue-500">
              <a href="#">ABOUT</a>
            </li>
            <li className="cursor-pointer text-white hover:text-blue-500">
              <a href="#">CONTACT</a>
            </li>
            <li className="cursor-pointer text-white hover:text-blue-500">
              <a href="#">REGISTER</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
