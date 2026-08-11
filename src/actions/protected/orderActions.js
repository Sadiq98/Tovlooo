import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_REGISTER_REQUEST,
  ORDER_REGISTER_SUCCESS,
  ORDER_REGISTER_FAIL,
} from "../../constants/orderConstants";

export const listOrders = (filter) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/sales/orders`, {
      ...config,
      params: filter,
    });

    dispatch({ type: ORDER_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: ORDER_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const registerOrder = (command) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_REGISTER_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.post(
      `/api/v1/sales/orders`,
      command,
      config
    );

    dispatch({ type: ORDER_REGISTER_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: ORDER_REGISTER_FAIL, payload: extractErrorMessage(err) });
  }
};
