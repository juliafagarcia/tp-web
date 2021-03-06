import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeScreen(props) {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(listProducts());
    return () => {

    };
  }, [])

    return loading ? <div>Carregando...</div>:
            error ? <div>{error}</div>:
              <ul className="products">
                {
              products.map(product => 
                <li key={product._id}>
                  <div className="product">
                      <Link to={'/product/' + product.id}>
                        <img className="product-image" src={product.image} alt="Bolo" />
                      </Link>
                      <div className="product-name">
                          <Link to={'/product/' + product.id}>{product.name}</Link>
                      </div>
                      <div className="product-description">{product.description}</div>
                      <div className="product-price">{product.price}</div>
                      <div className="product-rating">{product.rating} Estrelas ({product.review} Avaliações)</div>
                  </div>
                </li>
              )
            }
          </ul> ;
}

export default HomeScreen;