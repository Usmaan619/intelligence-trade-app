// reducer

import {
  DECREMENT,
  INCREMENT,
  SET_NET_INFO,
  SET_TOKEN,
} from "../actions/action";

const initialState = {
  count: 0,
  token: null,
  isNetConnected: false,
};

export default AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case SET_NET_INFO:
      return {
        ...state,
        isNetConnected: action.payload,
      };

    default:
      return state;
  }
};
