import React ,{useEffect, useState}from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useParams } from "react-router";

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
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{productData.title}</h4>
        <small className="text-default-500">${productData.price}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={productData.image}
          width={270}
        />
        <button onClick={handleAddToCart}className='btn btn-primary'>Add to Cart</button>
      </CardBody>
    </Card>
  );
}
export default SingleProductPage;