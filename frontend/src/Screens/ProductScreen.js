import React from 'react';
import data from '../data';
import { Link } from "react-router-dom";


function ProductScreen(props){
    const product = data.products.find(x => x.id === props.match.params.id);
    return <div>
        <div className="back">
            <Link to="/">Voltar</Link>
        </div>
        <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating} Estrelas ({product.review} Avaliações)
                </li>
                <li>
                  Preço: <b>{product.price}</b>
                </li>
                <li>
                  Descrição:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Preço: {product.price}</li>
                <li>
                  Status:{" Disponível"}
                  {/*product.status*/}
                </li>
                <li>
                  Quantidade: 
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </li>
                <li>
                    <button className="button">
                        Adicionar ao Carrinho!
                    </button>
                </li>
              </ul>
            </div>
        </div>
    </div>;
}

export default ProductScreen;