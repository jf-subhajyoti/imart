import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Product from '../../components/Product/Product';

import './Home.css';

const Home = () => {
    const BASE_URL = 'https://fakestoreapi.com/';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts('products')
        .then(res => {
            setProducts(res);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const getProducts = async (endPoint = '') => {
        let res = await axios.get(`${BASE_URL}${endPoint}`, {
            params: {}
        });
        return res.data;
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
