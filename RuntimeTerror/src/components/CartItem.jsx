import React from 'react';

const CartItem = ({ item, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <img src={item.image}/>
        <h2 className="font-semibold">{item.title}</h2>
        <p>Price: ${item.price}</p>
      </div>
      <button
        className="text-red-500"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
