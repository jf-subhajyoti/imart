import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar flex justify-content-between align-items-center'>
        <Link to="/" className='logo'>iMart</Link>
        <div className='links flex justify-content-end'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
        </div>
    </nav>
  )
}

export default Navbar
