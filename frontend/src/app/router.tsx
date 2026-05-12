import { Routes, Route } from "react-router";

import RootLayout from "@/layouts/RootLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminLayout from "@/layouts/AdminLayout";

import Home from "@/pages/Home/Index";
import ProductDetails from "@/pages/ProductDetails/Index";
import Product from "@/pages/Products/Index";
import NotFound from "@/pages/NotFound/Index";
import Cart from "@/pages/Cart/Index";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Auth */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<div>Login</div>} />
        <Route path="register" element={<div>Register</div>} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<div>Dashboard</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
