import React from 'react';
import CartItem from './CartItem';

const Carting = ({ cartItems, onDelete }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Carting;
