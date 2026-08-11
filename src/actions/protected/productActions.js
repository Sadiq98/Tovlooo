import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_IMAGE_UPLOAD_REQUEST,
  PRODUCT_IMAGE_UPLOAD_SUCCESS,
  PRODUCT_IMAGE_UPLOAD_FAIL,
  PRODUCT_IMAGE_REPLACE_REQUEST,
  PRODUCT_IMAGE_REPLACE_SUCCESS,
  PRODUCT_IMAGE_REPLACE_FAIL,
  PRODUCT_IMAGE_DELETE_REQUEST,
  PRODUCT_IMAGE_DELETE_SUCCESS,
  PRODUCT_IMAGE_DELETE_FAIL,
} from "../../constants/productConstants";

export const registerProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });

    const { data: body } = await axios.post(
      `/api/v1/catalog/products/register`,
      product,
      config
    );

    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });

    const { data: body } = await axios.put(
      `/api/v1/catalog/products/update`,
      product,
      config
    );

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const removeProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const config = getAuthConfig(getState);

    await axios.delete(`/api/v1/catalog/products/${id}`, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (err) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const uploadProductImage = (file) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_IMAGE_UPLOAD_REQUEST });

    const config = getAuthConfig(getState);
    const formData = new FormData();
    formData.append("file", file);

    const { data: body } = await axios.post(
      `/api/v1/catalog/products/uploadProductImage`,
      formData,
      config
    );

    dispatch({ type: PRODUCT_IMAGE_UPLOAD_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_IMAGE_UPLOAD_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const replaceProductImage =
  (oldFileName, newFile) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_IMAGE_REPLACE_REQUEST });

      const config = getAuthConfig(getState);
      const formData = new FormData();
      formData.append("newFile", newFile);

      const { data: body } = await axios.put(
        `/api/v1/catalog/products/replaceProductImage?oldFileName=${encodeURIComponent(
          oldFileName
        )}`,
        formData,
        config
      );

      dispatch({ type: PRODUCT_IMAGE_REPLACE_SUCCESS, payload: body.data });
    } catch (err) {
      dispatch({
        type: PRODUCT_IMAGE_REPLACE_FAIL,
        payload: extractErrorMessage(err),
      });
    }
  };

export const deleteProductImage = (fileName) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_IMAGE_DELETE_REQUEST });

    const config = getAuthConfig(getState);

    const { data: body } = await axios.delete(
      `/api/v1/catalog/products/deleteProductImage?fileName=${encodeURIComponent(
        fileName
      )}`,
      config
    );

    dispatch({ type: PRODUCT_IMAGE_DELETE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_IMAGE_DELETE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
