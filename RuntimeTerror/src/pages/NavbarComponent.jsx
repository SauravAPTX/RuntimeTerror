import React, { useState,useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './NavbarComponents.css'
import CarterLogo from './CarterLogo';
import {Badge} from "@nextui-org/react";
const NavbarComponent = ({searchbtn}) => {
    const [sortKey, setSortKey] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const api = "http://localhost:3000/cart";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let res = await fetch(api);
      let data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [sortKey, selectedCategory]);
    const [isInvisible, setIsInvisible] = React.useState(false);
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
    <div className='free'>
            <div className='icon'>
            </div>
    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
                <CarterLogo/>
            </div>
            <div className='icon'>
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                        <div className='user_icon'>
                        <AiOutlineUser />
                        </div>
                        <p>Hello, {user.name}</p>
                    </div>
                    )
                }
                <div className='second_icon'>
                <Link to="/Wishlist" className='link'><AiOutlineHeart /></Link>
                <Link to="/Cart" className='link'>
                <Badge color="danger" content={products.length} isInvisible={isInvisible} shape="circle">
             <BsBagCheck size={20} />
             </Badge>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/Products'className='link'>Products</Link>
                </li>
                <li>
                    <Link to='/about'className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact'className='link'>contact</Link>
                </li>
            </ul>
            </div>
            <div className='auth'>
                {
                    isAuthenticated ? (
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                    ):(
                    <Link to="/Login" className='auth-link'>
                    <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                    </Link>
                    )
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default NavbarComponent;