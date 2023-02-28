import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { remove } from '../../store/cartSlice';

import './Cart.css';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeProductFromCart = (productId) => {
    dispatch(remove(productId));
  }
  return (
    <div className='cart_container'>
      {
        products.map(product => {
          return (
            <div key={product.id} className='cart_card flex'>
              <div className='card_image'>
                <img src={product.image} alt={product.title}></img>
              </div>
              <div className='card_content flex flex-direction-column'>
                <p>{product.title}</p>
                <h5>&#8377; {product.price}</h5>                
              </div>
              <i onClick={() => removeProductFromCart(product.id)} className='cross_icon pointer'>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></i>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
