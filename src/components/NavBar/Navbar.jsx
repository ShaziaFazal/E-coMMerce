const NavItem = ({ value, label }) => {
  const handleOnClick = () => {
    window.location.href = `/category/${value}`;
  };

  return (
    <button onClick={handleOnClick} className="mr-8 ml-10 cursor-pointer">
      {label}
    </button>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-center items-stretch  sm:items-stretch sm:justify-center ">
          <NavItem value="Women" label="Women" />
          <NavItem value="Men" label="Men" />
          <NavItem value="Kids" label="Kids" />
          <NavItem value="Accessories" label="Accessories" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
