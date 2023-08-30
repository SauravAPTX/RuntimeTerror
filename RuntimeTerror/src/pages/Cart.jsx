import React from 'react'
import { SingleProduct } from '../components/SingleProduct';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const handleCheckoutClick = () => {
    navigate('/checkout');
    };
    <div>Products</div>
    const api="http://localhost:3000/cart";
    // const[total,setTotal]=useState();
    const[products,setProducts]=useState([]);
    useEffect(() => {
        async function fetchD() {
          let res = await fetch(api);
          let data = await res.json();
          setProducts(data);
        }
        fetchD();
      }, []);
    return (
      <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
      {products.map((product) => (
            <SingleProduct  {...product}/>
          ))}
      </div>
      <div className="cart-total">
        Total: ${products.reduce((total, item) => total + item.price, 0)}
      </div>
      <button className="checkout-button" onClick={handleCheckoutClick}>
        Proceed to Checkout
      </button>
    </div>
    );
  };
  


export default Cart;