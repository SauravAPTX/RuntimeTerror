import React, { useEffect, useState } from 'react'
import { SingleProduct } from '../components/SingleProduct';
import './Products.css';

const Products = () => {
    <div>Products</div>
    const api="http://localhost:3000/products";

    const[products,setProducts]=useState([]);
    useEffect(() => {
        async function fetchD() {
          let res = await fetch(api);
          let data = await res.json();
          setProducts(data);
        }
        fetchD();
      }, []);
    return (
      <div>
        <h1>Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <SingleProduct  {...product}/>
          ))}
        </div>
      </div>
    );
  };
  


export default Products;