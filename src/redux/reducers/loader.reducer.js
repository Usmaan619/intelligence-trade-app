const initialState = {
  sendOtpLoader: false,
  loader: false,
};

export default LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case true:
      return {
        ...state,
        [action.loaderName]: action?.value,
      };

    default:
      return state;
  }
};
