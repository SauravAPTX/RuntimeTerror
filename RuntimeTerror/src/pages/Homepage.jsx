import React from 'react';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import Products from './Products';

const Homepage=() =>{
    return(
        <div>
        <NavbarComponent/>
        <Products/>
        <Footer/>
        </div>
    );
}
export default Homepage;