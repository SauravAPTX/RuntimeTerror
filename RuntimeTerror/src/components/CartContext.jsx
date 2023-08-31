// import React, { useContext, createContext, useState } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItemCount, setCartItemCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);

//   const value = {
//     cartItemCount,
//     setCartItemCount,
//     cartItems,
//     setCartItems
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }
