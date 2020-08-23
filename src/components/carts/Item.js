import React from 'react';
import * as messages from '../../constants/Messages';

function Item(props) {
  let {stt, item, deleteProductFromCart, changeMessage, updateQuantity} = props;

  function subTotal(price, quantity) {
    return price * quantity
  };

  function onDeleteProduct(id) {
    deleteProductFromCart(id);
    changeMessage(messages.DELETE_CART);
  }

  function onUpdateQuantity(product, quantity) {
    if (quantity > 0) {
      updateQuantity(product, quantity);
      changeMessage(messages.UPDATE_CART);
    }
  }

  return (
    <tr className="text-center">
      <td>{stt + 1}</td>
      <td><img src={item.product.image} alt={item.product.name} className="img-in-cart" /></td>
      <td>{item.product.name}</td>
      <td>{item.product.price.toLocaleString()}</td>
      <td>
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="btn btn-info" onClick={() => onUpdateQuantity(item.product, item.quantity - 1)}><i className="fas fa-minus"></i></button>
          </div>
          <div className="form-control input-quantity">{item.quantity}</div>
          <div className="input-group-append">
            <button className="btn btn-info" onClick={() => onUpdateQuantity(item.product, item.quantity + 1)}><i className="fas fa-plus"></i></button>
          </div>
        </div>

      </td>
      <td>{subTotal(item.product.price, item.quantity).toLocaleString()}</td>
      <td><button className="btn btn-danger" onClick={() => onDeleteProduct(item.product.id)}><i className="fas fa-times"></i></button></td>
    </tr>
  );
}

export default Item;
