import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Carts from '../components/Carts';
import Item from '../components/carts/Item';
import Result from '../components/carts/Result';
import * as messages from '../constants/Messages';
import * as actions from '../actions/index';

function CartsContainer(props) {
  let {carts, deleteProductFromCart, changeMessage, updateQuantity} = props;

  function showItems(carts) {
    let listItems = <tr className="text-center text-secondary"><td colSpan="7">{messages.CART_EMPTY}</td></tr>
    if (carts.length > 0)
      listItems = carts.map((item, index) => <Item
                                                  key={index}
                                                  stt={index}
                                                  item={item}
                                                  deleteProductFromCart={deleteProductFromCart}
                                                  changeMessage={changeMessage}
                                                  updateQuantity={updateQuantity} />);
    return listItems;
  }
  function showPaidAmount(carts) {
    let showResults = null;
    if (carts.length > 0)
      showResults = <Result listItems={carts} />
    return showResults;
  }

  return (
    <Carts items={showItems(carts)} results={showPaidAmount(carts)} />
  );
}

CartsContainer.propTypes = {
  carts: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }),
      quantity: PropTypes.number.isRequired
    })
  )
};

const mapStateToProps = (state) => {
  return {
    carts: state.carts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProductFromCart: (id) => {
      dispatch(actions.deleteProductFromCart(id))
    },
    changeMessage: (message) => {
      dispatch(actions.changeMessage(message))
    },
    updateQuantity: (product, quantity) => {
      dispatch(actions.updateQuantityCart(product, quantity))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);
