import React from "react";
import { Avatar } from "@nextui-org/react";

export default function Avatars() {
  return (
    <div className="Avatar-container">
      <div className="flex gap-6 items-center">
        <Avatar src="https://img.freepik.com/free-photo/newborn-baby-enveloped-blue-scarf-sleeps-white-pillow_8353-848.jpg" style={{ width: '150px', height: 'auto' }} />
        <Avatar name="Baby Boy" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Kr0LfRypDs0dHXwAPbQ0SEsvUjR24Fyxh81sSmEOVteli-NylxgFHoj4cpXc69HyGoA&usqp=CAU" style={{ width: '150px', height: 'auto' }} />
        <Avatar name="Baby Girl" />
        <Avatar src="https://images.unsplash.com/photo-1627639679690-db4d401aae84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvZGRsZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" style={{ width: '150px', height: 'auto' }} />
        <Avatar name="Toddler Boy" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzniSPHlKPMYoYijh-HI27uFMrx37I5zm5g&usqp=CAU" style={{ width: '150px', height: 'auto' }} />
        <Avatar name="Toddler Girl" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfbtLfrksrpuyr7hHY4IuZrTxYqv2gBxYuA&usqp=CAU" style={{ width: '150px', height: 'auto' }} />
        <Avatar name="Boy" />
        <Avatar src="https://static.toiimg.com/photo/94857708.cms" style={{ width: '150px', height: 'auto' }} />
        <Avatar name="Girl" />
      </div>
    </div>
  );
}
