import React from "react";
import { Avatar } from "@nextui-org/react";

const avatarsData = [
  { type: "image", src: "https://img.freepik.com/free-photo/newborn-baby-enveloped-blue-scarf-sleeps-white-pillow_8353-848.jpg" },
  { type: "name", name: "Baby Boy" },
  { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Kr0LfRypDs0dHXwAPbQ0SEsvUjR24Fyxh81sSmEOVteli-NylxgFHoj4cpXc69HyGoA&usqp=CAU" },
  { type: "name", name: "Baby Girl" },
  { type: "image", src: "https://images.unsplash.com/photo-1627639679690-db4d401aae84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvZGRsZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" },
  { type: "name", name: "Toddler Boy" },
  { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzniSPHlKPMYoYijh-HI27uFMrx37I5zm5g&usqp=CAU"},
  { type: "name", name: "Toddler Boy" },
  { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfbtLfrksrpuyr7hHY4IuZrTxYqv2gBxYuA&usqp=CAU" },
  { type: "name", name: "Boy" },
  { type: "image", src: "https://static.toiimg.com/photo/94857708.cms" },
  { type: "name", name: "Girl" },
];

export default function Avatars() {
  return (
    <div className="Avatar-container">
      <div className="flex gap-6 items-center">
        {avatarsData.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.type === "image" ? avatar.src : undefined}
            name={avatar.type === "name" ? avatar.name : undefined}
            style={{ width: '275px', height: '183px' }} 
          />
        ))}
      </div>
  </div>
  );
}