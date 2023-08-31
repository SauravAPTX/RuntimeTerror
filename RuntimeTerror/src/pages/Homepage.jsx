import React from 'react';
import Carousel from './Carousel';
import Imagepage from '../components/Image';
import Example from './home';


const Homepage=() =>{
    return(
        <div>
          <Imagepage/>
          <Carousel/>
          <Example/>  
        </div>
    );
}
export default Homepage;