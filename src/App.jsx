import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/Details";
import AdminProducts from "./pages/AdminProduct";
import AdminOrders from "./pages/AdminOrder";
import AdminUsers from "./pages/AdminUser";
import AdminDashboard from "./pages/AdminDashboard";

import Checkout from "./pages/cart/Checkout";
import ShopingCard from "./pages/cart/ShopingCard";
const App = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailsPage />} />
          <Route path="/admin/dashboard/" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/customers" element={<AdminUsers />} />
          <Route path="/admin/dashboard/products" element={<AdminProducts />} />
          <Route path="/admin/dashboard/orders" element={<AdminOrders />} />
          <Route path="/detail/:id" element={<DetailsPage />} />
          <Route path="/cart/shoppingcart" element={<ShopingCard />} />
          <Route path="/cart/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
