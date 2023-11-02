const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center  bg-customPurple p-6">
          <div>
            <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white mr-5">
              Ladies Fashion
            </button>

            <div className="hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              <a className="px-5 py-3 hover:bg-gray-200" href="#">
                About Us
              </a>
              <a className="px-5 py-3 hover:bg-gray-200" href="#">
                Contact Us
              </a>
              <a className="px-5 py-3 hover:bg-gray-200" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div>
            <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white mr-5">
              Mens Fashion
            </button>

            <div className="hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              <a className=" hover:bg-gray-200" href="#">
                About Us
              </a>
              <a className=" hover:bg-gray-200" href="#">
                Contact Us
              </a>
              <a className=" hover:bg-gray-200" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div>
            <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white mr-5">
              Kids Wear
            </button>

            <div className="hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              <a className=" hover:bg-gray-200" href="#">
                About Us
              </a>
              <a className=" hover:bg-gray-200" href="#">
                Contact Us
              </a>
              <a className=" hover:bg-gray-200" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div>
            <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white mr-5">
              Accessories
            </button>

            <div className="hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              <a className="hover:bg-gray-200" href="#">
                About Us
              </a>
              <a className="hover:bg-gray-200" href="#">
                Contact Us
              </a>
              <a className="hover:bg-gray-200" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
