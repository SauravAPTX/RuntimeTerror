import React from 'react';
import Avatars from '../components/Avatar';
import Carousel from './Carousel';
import Imagepage from '../components/Image';


const Homepage=() =>{
    return(
        <div>
          <Imagepage/>
          <Carousel/>
          <Avatars/>  
        </div>
    );
}
export default Homepage;