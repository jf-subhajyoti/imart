import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const products = useSelector(state => state.cart);
  return (
    <>
      {
        products.map(product => {
          return (
            <>
              {product.title}
              {product.price}
            </>
          )
        })
      }
    </>
  )
}

export default Cart
