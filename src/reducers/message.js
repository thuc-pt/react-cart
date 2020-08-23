import * as messages from '../constants/Messages';
import * as types from '../constants/Types';

var initState = messages.WELCOME;

var message = (state = initState, action) => {
  if (action.type === types.CHANGE_MESSAGE) return action.message;
  return state;
};

export default message;