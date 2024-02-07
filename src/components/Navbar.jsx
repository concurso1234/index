const Navbar = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <h3 className="text-xl font-bold">CONCURSO '24</h3>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-6 text-sm">
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#">HOME</a>
            </li>
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#">EVENTS</a>
            </li>
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#">ABOUT</a>
            </li>
            <li className="font-light hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <div className="ml-[40px]">
            <button className="text-sm px-4 py-2 rounded-md cursor-pointer transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <a href="#">REGISTER</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
