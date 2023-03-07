import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import Product from '../../components/Product/Product';

import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../../store/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.product)
  // const BASE_URL = 'https://fakestoreapi.com/';
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
      // getProducts('products')
      // .then(res => {
      //     setProducts(res);
      // }).catch((err) => {
      //     console.log(err);
      // })
  }, []);

  // const getProducts = async (endPoint = '') => {
  //     let res = await axios.get(`${BASE_URL}${endPoint}`, {
  //         params: {}
  //     });
  //     return res.data;
  // }

  if(status === STATUSES.LOADING) {
    return <h2>Loading......</h2>
  }

  if(status === STATUSES.ERROR) {
    return <h2>Something Went Wrong!!</h2>
  }

  return (
    <div>
      <h1 className='primary_heading'>Welcome to iMart</h1>
      <div className='productsWrapper'>
        {products.map(item => <Product key ={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default Home
