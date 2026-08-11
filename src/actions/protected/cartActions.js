import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
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
  CART_DELETE_REQUEST,
  CART_DELETE_SUCCESS,
  CART_DELETE_FAIL,
  CART_CLEAR_REQUEST,
  CART_CLEAR_SUCCESS,
  CART_CLEAR_FAIL,
} from "../../constants/cartConstants";

export const getCartById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_DETAILS_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/people/carts/${id}`,
      config
    );

    dispatch({ type: CART_DETAILS_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: CART_DETAILS_FAIL, payload: extractErrorMessage(err) });
  }
};

export const listCarts = (filter) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/people/carts`, {
      ...config,
      params: filter,
    });

    dispatch({ type: CART_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: CART_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const createCart = (command) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_CREATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.post(
      `/api/v1/people/carts`,
      command,
      config
    );

    dispatch({ type: CART_CREATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: CART_CREATE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const removeCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_DELETE_REQUEST });

    const config = getAuthConfig(getState);
    await axios.delete(`/api/v1/people/carts/${id}`, config);

    dispatch({ type: CART_DELETE_SUCCESS });
  } catch (err) {
    dispatch({ type: CART_DELETE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const clearCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_CLEAR_REQUEST });

    const config = getAuthConfig(getState);
    await axios.delete(`/api/v1/people/carts/clear/${id}`, config);

    dispatch({ type: CART_CLEAR_SUCCESS });
  } catch (err) {
    dispatch({ type: CART_CLEAR_FAIL, payload: extractErrorMessage(err) });
  }
};
