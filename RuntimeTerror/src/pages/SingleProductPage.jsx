import React ,{useEffect, useState}from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useParams } from "react-router";
import "../style/SingleProductPage.css";

const SingleProductPage = () => {
  const api="http://localhost:3000/products";
  const { id }= useParams(); //returns an object
  const [productData, setProductData] = useState({});
  useEffect(() => {
  async function fetchD() {
      let res = await fetch(`${api}/${id}`);
      let data = await res.json();
      setProductData(data);
      console.log(data,"data");
  }
  fetchD();
  }, [id]);
  const handleAddToCart = async (event) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id }),
      });
      console.log("Added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <Card className="product-card">
  <CardHeader className="product-header">
    <h4 className="product-title">{productData.title}</h4>
    <small className="product-price">${productData.price}</small>
  </CardHeader>
  <CardBody className="product-body">
    <div className="product-image-container">
      <Image
        alt="Product"
        className="product-image"
        src={productData.image}
        width={270}
      />
    </div>
    <p className="product-description">{productData.description}</p>
    <button onClick={handleAddToCart} className="add-to-cart-button">
      Add to Cart
    </button>
  </CardBody>
</Card>
  );
}
export default SingleProductPage;