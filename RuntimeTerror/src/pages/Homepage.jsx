import React from 'react'
//import Navbar from '../pages/Navbar';
import NavbarComponent from './NavbarComponent';

const Homepage=() =>{
    return(
        <div className="home">
      <h1>Welcome to Our Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
    );
}
export default Homepage;