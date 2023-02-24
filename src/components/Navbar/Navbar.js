import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const products = useSelector((state) => state.cart)
  return (
    <nav className='navbar flex justify-content-between align-items-center'>
        <Link to="/" className='logo'>iMart</Link>
        <div className='links flex justify-content-end'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">
              Cart
              <span className='badge'>{products.length}</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
