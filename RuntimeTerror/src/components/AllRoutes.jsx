import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Homepage from "../pages/Homepage";
import SingleProductPage from "../pages/SingleProductPage";
import Cart from "../pages/CartPage"
import Wishlist from "../pages/Wishlist"
import Profile from "../pages/Profile"
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Payment from "../pages/Payment"
import About from "../pages/About"
import Error from "../pages/Error"

 const AllRoutes= ()=> {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/Products" element={<Products/>}></Route>
            <Route path="/Products/:id" element={<SingleProductPage/>}></Route>
            <Route path="/Wishlist" element={<Wishlist/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/SignUp" element={<Signup/>}></Route>
            <Route path="/Payment" element={<Payment/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Error" element={<Error/>}></Route>
            </Routes>
    )
}
export default AllRoutes;
