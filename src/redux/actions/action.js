// actions.js

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_TOKEN = "SET_TOKEN";
export const SET_NET_INFO = "SET_NET_INFO";

export const SetToken = (data) => ({
  type: SET_TOKEN,
  payload: data,
});

export const SetNetInfo = (data) => ({
  type: SET_NET_INFO,
  payload: data,
});

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
