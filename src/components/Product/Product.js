import React from 'react';

import './Product.css';

const Product = (props) => {
  const {item} = props;
  console.log(item)
  return (
    <div className='card'>
      <div className='cardImage'>
        <img src={item.image} alt={item.title}></img>
      </div>
      <div className='cardBody'>
        <h6 className='rating flex align-items-center justify-content-center'>Rating: {item.rating.rate} | {item.rating.count}</h6>
        <div className='card-title-price flex justify-content-between'>
          <h5 className='cardTitle'>{item.title}</h5>
          <h5 className='cardPrice'>{item.price}</h5>
        </div>
      </div>
    </div>
  )
}

export default Product
