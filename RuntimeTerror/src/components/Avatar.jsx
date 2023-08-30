import React from "react";
import { Avatar } from "@nextui-org/react";

const avatarsData = [
  { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Kr0LfRypDs0dHXwAPbQ0SEsvUjR24Fyxh81sSmEOVteli-NylxgFHoj4cpXc69HyGoA&usqp=CAU" },
  { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzniSPHlKPMYoYijh-HI27uFMrx37I5zm5g&usqp=CAU"},
  { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfbtLfrksrpuyr7hHY4IuZrTxYqv2gBxYuA&usqp=CAU" },
  { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPIGljB0EpXshKyeCDOWayI2d2RY_jn7FWK9FHH90gg&s" },
  { type: "image", src: "https://img.freepik.com/free-photo/small-baby-lies-bed_8353-5187.jpg?size=626&ext=jpg&ga=GA1.2.2042039414.1693377215&semt=sph" },
  
];


export default function Avatars() {
  return (
    <div className="Avatar-container">
      <div className="flex gap-6 items-center">
        {avatarsData.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.type === "image" ? avatar.src : undefined}
            style={{ width: '275px', height: '183px' }} 
          />
        ))}
      </div>
  </div>
  );
}