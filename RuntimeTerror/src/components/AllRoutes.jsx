import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Homepage from "../pages/Homepage";
import SingleProductPage from "../pages/SingleProductPage";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Profile from "../pages/Profile";
import SignUplogIn from "../pages/SignUpLog";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/products/:id" element={<SingleProductPage />}></Route>
      <Route path="/Wishlist" element={<Wishlist />}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/SignUpLogIn" element={<SignUplogIn />}></Route>
    </Routes>
  );
}
export default AllRoutes;
