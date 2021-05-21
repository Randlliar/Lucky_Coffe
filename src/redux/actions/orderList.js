export const setOrderList = ({ name, items }) => ({
  type: 'SET_ORDER_LIST',
  payload: { name, items },
});

export const getOrders = () => ({
  type: 'GET_ORDERS',
});
