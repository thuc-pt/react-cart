import React from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/products/Product';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

function ProductsContainer(props) {
  let {products, addToCart, changeMessage} = props;
  let listProducts = products.map((product, index) => <Product key={index} product={product} addToCart={addToCart} changeMessage={changeMessage} />);

  return <Products>{listProducts}</Products>
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, quantity) => {
      dispatch(actions.addToCart(product, quantity))
    },
    changeMessage: (message) => {
      dispatch(actions.changeMessage(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
