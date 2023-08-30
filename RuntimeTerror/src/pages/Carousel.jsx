import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {  Button, Progress} from "@nextui-org/react";
import {HeartIcon} from "./HeartIcon";
import {PauseCircleIcon} from "./PauseCircleIcon";
import {NextIcon} from "./NextIcon";
import {PreviousIcon} from "./PreviousIcon";
import {RepeatOneIcon} from "./RepeatOneIcon";
import {ShuffleIcon} from "./ShuffleIcon";


// const images = [
//   "https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221_1280.jpg",
//   "https://img.freepik.com/free-psd/flat-design-baby-store-landing-page_23-2150318605.jpg?w=1380&t=st=1693377362~exp=1693377962~hmac=2d2dc4956103b03081fbc0032dd2b10079988428011cab52cca12e4633f138d9",
//   "https://img.freepik.com/free-psd/baby-clothes-banner-template_23-2148971070.jpg?w=1380&t=st=1693377408~exp=1693378008~hmac=346256c90954f58ad91aae0d4ede6f3e4e51a2e7f6d6e7df6270563f690bf7f5",
//   "https://img.freepik.com/premium-psd/hand-drawn-baby-items-facebook-template_23-2150510986.jpg?w=1380",
//   "https://img.freepik.com/free-vector/flat-minimal-boutique-social-media-post-template_23-2149333998.jpg?w=1060&t=st=1693377487~exp=1693378087~hmac=0bd4387627bd493784ae9ba2b2a19f41ff21ae26b6df44c8c72be8f62d50ba41",
//   "https://img.freepik.com/free-vector/flat-sale-banner-children_23-2149564958.jpg?w=1060&t=st=1693377557~exp=1693378157~hmac=3fc66136b9ce0309f48fbfd0d968283c55e528baf1a1038e02bde85672226757",
// ];

// const ImagePage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div>
//       <Image active={currentIndex}>
//         {images.map((image, index) => (
//           <Image.Item key={index}>
//             <img src={image} alt={`Image ${index}`} />
//           </Image.Item>
//         ))}
//       </Image>
//       <div style={{ textAlign: "center", marginTop: "16px" }}>
//         <Button onClick={handlePrev}>Previous</Button>
//         <Button onClick={handleNext} style={{ marginLeft: "8px" }}>
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

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

 function App() {
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
 