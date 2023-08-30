import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import "./Carousel.css";


function HeroSection() {
    return(
        <div className='heroSection'>
            <img src="https://th.bing.com/th/id/OIP.jde7OkDqcg3UZcYnNphRlAHaHa?pid=ImgDet&rs=1"></img>
            <h1>Labour Day Sale</h1>
            <h3>50%off on everything</h3>
            <button>Shop Now</button>
            </div>
    )
}

 function Carousel() {
  const list = [
    {
      title: "Bodysuit",
      img: "https://th.bing.com/th/id/OIP.6-b147Ak12oloenLtQt4dwHaLH?pid=ImgDet&rs=1",
      price: "$5.50",
    },
    {
      title: "Jackets",
      img: "https://th.bing.com/th/id/OIP.PWgMvKjh2pzOhi2Sg0stCgHaHa?pid=ImgDet&rs=1",
      price: "$3.00",
    },
    {
      title: "Party Wear",
      img: "https://th.bing.com/th/id/OIP.0dUyblgFZEMYI3gSKBWhrQHaHa?pid=ImgDet&rs=1",
      price: "$10.00",
    },
    {
      title: " Casual wear",
      img: "https://i.pinimg.com/736x/bf/66/24/bf6624fd23da2d5813609dbadbdbc660.jpg",
      price: "$5.30",
    },
    {
      title: "Party wear",
      img: "https://th.bing.com/th/id/OIP.5zVGr-z5RODaWleewayVhgAAAA?pid=ImgDet&rs=1",
      price: "$15.70",
    },
    {
        title: "Beach wear",
        img: "https://th.bing.com/th/id/OIP.YA-oKRZpkjLLs6ZI90x4xgAAAA?pid=ImgDet&rs=1",
        price: "$10.70",
      },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}


function HeroSections() {
  return (
    <div className="hero">
      <h1>NEW BABY ESSENTIALS</h1>
      <p>Upto 50% off on every product</p>
      <button className="cta-button">Shop now</button>
    </div>
  );
}

export default Carousel;
 