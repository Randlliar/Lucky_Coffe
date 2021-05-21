// const orderItem = { name: '', orderList: {} };

const initialState = {
  orders: [],
};

const orders = (state = initialState, action) => {
  if (action.type === 'SET_ORDER_LIST') {
    return {
      ...state,
      orders: [...state.orders, action.payload],
    };
  }
  if (action.type === 'GET_ORDERS') {
    return state;
  }
  return state;
};

export default orders;
