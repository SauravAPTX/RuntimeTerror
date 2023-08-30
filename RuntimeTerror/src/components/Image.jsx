import React from "react";
import {Image} from "@nextui-org/react";
import Products from "../pages/Products";

export default function Imagepage() {
    //const Imagepage = "http://localhost:3000/products";
  return (
    <a href={<Products/>} target="_blank" rel="noopener noreferrer">
    <Image
    width={1200}
      alt="NextUI hero Image"
      src="https://img.freepik.com/free-vector/flat-minimal-boutique-social-media-post-template_23-2149333998.jpg?size=626&ext=jpg&ga=GA1.1.291539164.1693422185&semt=ais"
      align="center"
    />
    </a>
  );
}
