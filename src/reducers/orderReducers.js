import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_REGISTER_REQUEST,
  ORDER_REGISTER_SUCCESS,
  ORDER_REGISTER_FAIL,
  ORDER_REGISTER_RESET,
} from "../constants/orderConstants";

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true, orders: [] };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_REGISTER_REQUEST:
      return { loading: true };
    case ORDER_REGISTER_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};
