import DefaultLayout from "../components/layouts/DefaultLayout";
import FourCardsList from "../components/FourCardsList";
import TwoCardsList from "../components/TwoCardsList";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useState, useEffect } from "react";
import axios from "axios";

const ItemsPage = () => {
  const [view, setView] = useState(4);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  const pathname = location.pathname;
  const parts = pathname.split("/");
  const searchTerm = parts[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/productInfo/products/search?term=${searchTerm}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error searching products:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched or in case of an error
      }
    };

    fetchData();
  }, [searchTerm]);

  const links = [
    {
      current: true,
      href: "#",
      name: "Home",
    },
    {
      current: false,
      href: "#",
      name: searchTerm,
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <DefaultLayout>
      <div className="px-6 py-6">
        <h3 className="text-lg font-medium">Search Result for {searchTerm}</h3>
      </div>

      <Breadcrumb showDivider={false} links={links}>
        <div className="flex gap-6">
          <div className="flex gap-3">
            <span>View</span>
            <button
              onClick={() => setView(2)}
              className="bg-gray-800 text-white px-2"
            >
              2
            </button>
            <button
              onClick={() => setView(4)}
              className="bg-gray-800 text-white px-2"
            >
              4
            </button>
          </div>
        </div>
      </Breadcrumb>

      {view === 2 ? (
        <TwoCardsList products={products} />
      ) : (
        <FourCardsList products={products} />
      )}
    </DefaultLayout>
  );
};

export default ItemsPage;
