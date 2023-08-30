import React from 'react';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import { Avatar } from '@nextui-org/react';
import CarouselSlider from '../components/CarouselSlider';


const Homepage=() =>{
    return(
        <div>
        <NavbarComponent/>
        <Avatar/>
        <Footer/>
        </div>
    );
}
export default Homepage;