// import React, { useState } from "react";
// import { Image, Button } from "@nextui-org/react";

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

// export default ImagePage;
