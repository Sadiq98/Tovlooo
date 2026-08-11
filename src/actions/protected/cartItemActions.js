import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  CART_ITEM_DETAILS_REQUEST,
  CART_ITEM_DETAILS_SUCCESS,
  CART_ITEM_DETAILS_FAIL,
  CART_ITEM_LIST_REQUEST,
  CART_ITEM_LIST_SUCCESS,
  CART_ITEM_LIST_FAIL,
  CART_ITEM_ADD_REQUEST,
  CART_ITEM_ADD_SUCCESS,
  CART_ITEM_ADD_FAIL,
  CART_ITEM_UPDATE_REQUEST,
  CART_ITEM_UPDATE_SUCCESS,
  CART_ITEM_UPDATE_FAIL,
  CART_ITEM_DELETE_REQUEST,
  CART_ITEM_DELETE_SUCCESS,
  CART_ITEM_DELETE_FAIL,
} from "../../constants/cartItemConstants";

export const getCartItemById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ITEM_DETAILS_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/people/cartitems/${id}`,
      config
    );

    dispatch({ type: CART_ITEM_DETAILS_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: CART_ITEM_DETAILS_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const listCartItems = (filter) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ITEM_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/people/cartitems`, {
      ...config,
      params: filter,
    });

    dispatch({ type: CART_ITEM_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: CART_ITEM_LIST_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const addCartItem = (command) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ITEM_ADD_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.post(
      `/api/v1/people/cartitems`,
      command,
      config
    );

    dispatch({ type: CART_ITEM_ADD_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: CART_ITEM_ADD_FAIL, payload: extractErrorMessage(err) });
  }
};

export const updateCartItem = (command) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ITEM_UPDATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.put(
      `/api/v1/people/cartitems`,
      command,
      config
    );

    dispatch({ type: CART_ITEM_UPDATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: CART_ITEM_UPDATE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const removeCartItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ITEM_DELETE_REQUEST });

    const config = getAuthConfig(getState);
    await axios.delete(`/api/v1/people/cartitems/${id}`, config);

    dispatch({ type: CART_ITEM_DELETE_SUCCESS });
  } catch (err) {
    dispatch({
      type: CART_ITEM_DELETE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
