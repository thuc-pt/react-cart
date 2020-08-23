import React from 'react';
import RandStr from 'randomstring';
import * as messages from '../../constants/Messages';

function Product(props) {
  let {product, addToCart, changeMessage} = props;

  function showRating(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++)
      stars.push(<i key={RandStr.generate(16)} className="fas fa-star"></i>)
    for (let i = 0; i < (5 - rating); i++)
      stars.push(<i key={RandStr.generate(16)} className="far fa-star"></i>)
    return stars;
  }

  function onAddToCart(product) {
    addToCart(product, 1);
    changeMessage(messages.ADD_TO_CART);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="card-body">
          <img src={product.image} alt={product.name} className="img-fluid" />
          <h5 className="text-center"><strong>{product.name}</strong></h5>
          <div className="text-center">{showRating(product.rating)}</div>
          <div className="description">{product.description}</div>
        </div>
        <div className="card-footer group-price">
          <div><strong>{product.price.toLocaleString()}</strong></div>
          <div><i className="fas fa-cart-arrow-down" onClick={() => onAddToCart(product)}></i></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
