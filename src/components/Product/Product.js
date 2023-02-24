import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';

import './Product.css';

const Product = (props) => {
  const dispatch = useDispatch();
  const {item} = props;
  console.log(item)
  const addToCart = (product) => {
    dispatch(add(product));
  }
  return (
    <div className='card'>
      <div className='cardImage'>
        <img src={item.image} alt={item.title}></img>
      </div>
      <div className='cardContent'>
        <h6 className='rating flex align-items-center justify-content-center'>Rating: {item.rating.rate} | {item.rating.count}</h6>
        <div className='card-title-price flex justify-content-between'>
          <h5 className='cardTitle'>{item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}</h5>
          <h5 className='cardPrice'>{item.price}</h5>
        </div>
        <div className='cardButton'>
          <button className='btn btn-primary' onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
