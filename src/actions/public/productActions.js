import axios from "axios";

import { extractErrorMessage } from "../authConfig";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_IMAGE_REQUEST,
  PRODUCT_IMAGE_SUCCESS,
  PRODUCT_IMAGE_FAIL,
} from "../../constants/productConstants";

export const listProducts = (filter) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data: body } = await axios.get(`/api/v1/catalog/products`, {
      params: filter,
    });

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_GET_REQUEST });

    const { data: body } = await axios.get(`/api/v1/catalog/products/${id}`);

    dispatch({ type: PRODUCT_GET_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PRODUCT_GET_FAIL, payload: extractErrorMessage(err) });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data: body } = await axios.get(
      `/api/v1/catalog/products/productdetails/${id}`
    );

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const getProductImage = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_IMAGE_REQUEST });

    const { data: body } = await axios.get(
      `/api/v1/catalog/products/image/${id}`
    );

    dispatch({ type: PRODUCT_IMAGE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PRODUCT_IMAGE_FAIL, payload: extractErrorMessage(err) });
  }
};
