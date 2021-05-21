const initialState = {
  login: 'login',
  password: '123qwe',
  isSignUp: false,
};

const admin = (state = initialState, action) => {
  if (action.type === 'SET_AUTH_FLAG') {
    return {
      ...state,
      isSignUp: action.payload,
    };
  }
  if (action.type === 'GET_AUTH_INFO') {
    return state;
  }
  return state;
};

export default admin;
