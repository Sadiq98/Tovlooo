import {
  CART_DETAILS_REQUEST,
  CART_DETAILS_SUCCESS,
  CART_DETAILS_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
  CART_CREATE_REQUEST,
  CART_CREATE_SUCCESS,
  CART_CREATE_FAIL,
  CART_CREATE_RESET,
  CART_DELETE_REQUEST,
  CART_DELETE_SUCCESS,
  CART_DELETE_FAIL,
  CART_CLEAR_REQUEST,
  CART_CLEAR_SUCCESS,
  CART_CLEAR_FAIL,
} from "../constants/cartConstants";

export const cartDetailsReducer = (state = { cart: {} }, action) => {
  switch (action.type) {
    case CART_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CART_DETAILS_SUCCESS:
      return { loading: false, cart: action.payload };
    case CART_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cartListReducer = (state = { carts: [] }, action) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return { loading: true, carts: [] };
    case CART_LIST_SUCCESS:
      return { loading: false, carts: action.payload };
    case CART_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cartCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_CREATE_REQUEST:
      return { loading: true };
    case CART_CREATE_SUCCESS:
      return { loading: false, success: true, cart: action.payload };
    case CART_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CART_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const cartDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_DELETE_REQUEST:
      return { loading: true };
    case CART_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CART_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cartClearReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_CLEAR_REQUEST:
      return { loading: true };
    case CART_CLEAR_SUCCESS:
      return { loading: false, success: true };
    case CART_CLEAR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
