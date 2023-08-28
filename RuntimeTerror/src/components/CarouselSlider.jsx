//first install react slick and slider from the website
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSlider = ({ props }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <Slider {...settings}>
      {props.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={`Item ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselSlider;