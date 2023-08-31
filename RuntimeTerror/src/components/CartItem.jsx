// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h2 className="font-semibold">{item.name}</h2>
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
