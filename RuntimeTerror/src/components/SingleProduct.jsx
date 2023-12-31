import React ,{useState}from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useNavigate } from "react-router";
import "../style/SingleProduct.css";


export const SingleProduct = (props) => {
    const{id,title,image,price,description,category,rating}=props;
    const navigate = useNavigate();
    function nav() {
        navigate(`/products/${id}`)
    }
    const handleAddToCart = async (event) => {
      event.preventDefault();
      try {
        const dataToAdd = {
          productId: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image,
          rating: rating
        };
    
        await fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToAdd),
        });
    
        console.log("Added to cart");
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    };
    
  return (
    <Card className="py-4" style={{ width: '30%', minWidth: '300px', marginRight: '2%' }}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h3 className="font-bold text-large">{category}</h3>
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500">Price=${price}</small>
        <small className="text-default-500"> </small>
        <small className="text-default-500">
          Rating={rating.rate}({rating.count})
          </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
        <small className="text-default-500">{description}</small>
        <button onClick={nav}className='btn btn-primary'>Details</button>
        <button onClick={handleAddToCart}className='btn btn-primary'>Add to Cart</button>
       
      </CardBody>
    </Card>
  );
}
export default SingleProduct;