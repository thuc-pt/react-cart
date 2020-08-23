import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';

function MessagesContainer(props) {
  return <Message message={props.message} />
}

MessagesContainer.propTypes = {
  message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, null)(MessagesContainer);
