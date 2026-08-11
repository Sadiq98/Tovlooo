import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_REGISTER_REQUEST,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
} from "../../constants/customerConstants";

export const listCustomers = (filter) => async (dispatch, getState) => {
  try {
    dispatch({ type: CUSTOMER_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/people/customers`, {
      ...config,
      params: filter,
    });

    dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: CUSTOMER_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const getCustomerById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CUSTOMER_DETAILS_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/people/customers/${id}`,
      config
    );

    dispatch({ type: CUSTOMER_DETAILS_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: CUSTOMER_DETAILS_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const registerCustomer = (command) => async (dispatch, getState) => {
  try {
    dispatch({ type: CUSTOMER_REGISTER_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.post(
      `/api/v1/people/customers`,
      command,
      config
    );

    dispatch({ type: CUSTOMER_REGISTER_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: CUSTOMER_REGISTER_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const updateCustomer = (command) => async (dispatch, getState) => {
  try {
    dispatch({ type: CUSTOMER_UPDATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.put(
      `/api/v1/people/customers`,
      command,
      config
    );

    dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: CUSTOMER_UPDATE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const removeCustomer = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CUSTOMER_DELETE_REQUEST });

    const config = getAuthConfig(getState);
    await axios.delete(`/api/v1/people/customers/${id}`, config);

    dispatch({ type: CUSTOMER_DELETE_SUCCESS });
  } catch (err) {
    dispatch({
      type: CUSTOMER_DELETE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
