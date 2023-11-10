import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/Details";
const productDetail = [
  {
    title: "Embroidered Shirt With Dupatta",
    id: `923948739879823749-Peach-37846723`,
    price: 7000,
    stock: 10,
    size: 8,
    description:
      "Embroidered Shirt With Panels And Embroidery On Sleeves And Lace Detailing On Hem, Sleeves, Showk And Hem. Comes With Digital Silk Dupatta",
    sizeChart: "",
    fabric: "Multi Neps",
    content: "Shirt+Dupatta",
    fit: "Regular Fit",
    modelFit: "Model is Wearing 8 Size",
    modleSize: "Model Height is 5'" + 6 + '"',
    deliveryDetails:
      'Due to "Season End Sale" orders will be dispatched within 05 working days. Thank you!',
    note: "Actual product color may vary slightly from the image. Please allow 1-3 (cm) difference due to manual measurement.",
    img1: "https://beechtree.pk/cdn/shop/files/BTS232613056_1.jpg?v=1687434775",
    img2: "https://beechtree.pk/cdn/shop/files/BTS232613056_2.jpg?v=1687434775",
    img3: "https://beechtree.pk/cdn/shop/files/BTS232613056_3.jpg?v=1687434774",
    img4: "https://beechtree.pk/cdn/shop/files/BTS232613056_4.jpg?v=1687434775",
  },
];
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// {productDetail.map((product) => (
//                        <div key={product.id}>
//     <ProductDetailSection product={product} />
//    </div>
//                       ))}
