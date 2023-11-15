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
        <div className="flex flex-1 items-stretch justify-center sm:items-stretch sm:justify-center my-2 ">
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
