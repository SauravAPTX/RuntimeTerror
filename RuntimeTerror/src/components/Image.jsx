import React from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom"; 

export default function Imagepage() {
  return (
    <Link to="/products">
      <Image
        width={1215}
        height={600}
        alt="NextUI hero Image"
        src="https://img.freepik.com/free-vector/flat-minimal-boutique-social-media-post-template_23-2149333999.jpg?size=626&ext=jpg&ga=GA1.1.291539164.1693422185&semt=ais"
        align="center"
      />
    </Link>
  );
}
