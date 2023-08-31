import React, { useState, useEffect } from 'react';
import Cart from '../components/Carting';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
//   const { setCartItemCount } = useCart();
  const navigate = useNavigate();
    const handleCheckoutClick = () => {
    navigate('/Payment');
    };

    useEffect(async () => {
        try {
          const response = await fetch('http://localhost:3000/cart');
          const data = await response.json();
          
          setCartItems(data);
        //   setCartItemCount(data.length);
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      }, []);

  const handleDelete = (itemId) => {
    fetch(`http://localhost:3000/cart/${itemId}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
    });
  };
  

  return (
    <div className="p-4">
      <Cart cartItems={cartItems} onDelete={handleDelete} />
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCheckoutClick}>
          Checkout
        </button>
        <p className="mt-2">
          Total Price: ${cartItems.reduce((total, item) => total + item.price, 0)}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
