import React from 'react';
import data from '../data';
import { Link } from "react-router-dom";

function HomeScreen(props) {
    return <ul className="products">
              {
                data.products.map(product => 
                  <li>
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