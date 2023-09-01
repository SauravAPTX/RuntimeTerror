import React from 'react';
import Carousel from './Carousel';
import Imagepage from '../components/Image';
import Example from './home';
import './homepage.css'; 

const Homepage = () => {
    return (
        <div className="homepage-container"> 
            <Imagepage />
            <Carousel />
            <Example />
        </div>
    );
}

export default Homepage;
