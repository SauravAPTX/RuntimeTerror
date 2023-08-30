import React from 'react'
import { SingleProduct } from '../components/SingleProduct';
import './Products.css';

const Products = () => {
    <div>Products</div>
    const products=[
      
    ];
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