import React from "react";
import {Route,Routes} from 'react-router-dom'
//import Products from "../pages/Products"
import Homepage from "../pages/Homepage"
import SingleProdPage from "../pages/SingleProdPage";
 const AllRoutes= ()=> {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            //<Route path="/Products" element={<Products/>}></Route>
            <Route path="/products/:id" element={<SingleProdPage/>}></Route>
        </Routes>
    )
}
export default AllRoutes;