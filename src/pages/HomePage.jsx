import DefaultLayout from "../components/layouts/DefaultLayout";
import FourCardsList from "../components/FourCardsList";
import TwoCardsList from "../components/TwoCardsList";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Carousel from "../components/Carousel/Carousel";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import axios from "axios";

const images = [
  "https://beechtree.pk/cdn/shop/files/Web_Banner_Desktop_13.jpg?v=1699256988",
  "https://beechtree.pk/cdn/shop/files/Web_Banner_Desktop_outerwear.jpg?v=1699012714",
  "https://pk.sapphireonline.pk/cdn/shop/files/HOME-web-banners.webp?v=1698908393&width=1400",
];
const links = [
  {
    current: true,
    href: "#",
    name: "Home",
  },
  {
    current: false,
    href: "#",
    name: "Women",
  },
];
const HomePage = () => {
  const [view, setView] = useState(4);
  const [products, setProducts] = useState([]);

  // console.log(currentUser, "currentUser", isAuthenticated);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/productInfo/getallproducts")
        .then((response) => {
          setProducts(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DefaultLayout>
      <div className="">
        <Carousel
          images={images}
          duration={700}
          showIndicators={true}
          showControls={true}
        />
      </div>

      <Breadcrumb showDivider={false} links={links}>
        <div className="flex gap-6">
          <div className="flex gap-3">
            <span>view</span>
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

          <Dropdown
            placeholder={"Filter +"}
            options={[
              { label: "Price Low To High", value: "Price Low To High" },
              { label: "Price High To Low", value: "Price High To Low" },
            ]}
          />
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

export default HomePage;
