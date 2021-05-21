export const setAuthFlag = (flag) => ({
  type: 'SET_AUTH_FLAG',
  payload: flag,
});

export const getAuthInfo = () => ({
  type: 'GET_AUTH_INFO',
});
