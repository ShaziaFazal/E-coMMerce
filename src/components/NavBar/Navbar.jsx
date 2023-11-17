import { useEffect, useState } from "react";
import axios from "axios";

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
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/categoryMaker/getAllCategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(categories);

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
