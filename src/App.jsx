import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/Details";
import AdminProducts from "./pages/AdminProduct";
import AdminOrders from "./pages/AdminOrder";
import AdminUsers from "./pages/AdminUser";
import AdminDashboard from "./pages/AdminDashboard";
import Checkout from "./pages/cart/Checkout";
import ShopingCard from "./pages/cart/ShopingCard";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import StripeContainer from "./components/Stripe/StripeContainer";
import AdminProductForm from "./pages/AdminProductForm";
import Category from "./pages/Category";

const App = () => {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/detail" element={<DetailsPage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/customers" element={<AdminUsers />} />
          <Route path="/admin/dashboard/products" element={<AdminProducts />} />
          <Route path="/admin/dashboard/orders" element={<AdminOrders />} />
          <Route
            path="/admin/dashboard/addproducts"
            element={<AdminProductForm />}
          />
          <Route path="/detail/:id" element={<DetailsPage />} />
          <Route path="/cart/shoppingcart" element={<ShopingCard />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/cart/Stripe" element={<StripeContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
