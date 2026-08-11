import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_ROLES_REQUEST,
  USER_ROLES_SUCCESS,
  USER_ROLES_FAIL,
  USER_ROLES_UPDATE_REQUEST,
  USER_ROLES_UPDATE_SUCCESS,
  USER_ROLES_UPDATE_FAIL,
} from "../../constants/userConstants";

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/identity/users`, config);

    dispatch({ type: USER_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: USER_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const getUserById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/identity/users/${id}`,
      config
    );

    dispatch({ type: USER_DETAILS_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: USER_DETAILS_FAIL, payload: extractErrorMessage(err) });
  }
};

export const updateUser = (request) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.put(
      `/api/v1/identity/users`,
      request,
      config
    );

    dispatch({ type: USER_UPDATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: USER_UPDATE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const getUserRoles = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_ROLES_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/identity/users/roles/${id}`,
      config
    );

    dispatch({ type: USER_ROLES_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: USER_ROLES_FAIL, payload: extractErrorMessage(err) });
  }
};

export const updateUserRoles = (id, request) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_ROLES_UPDATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.put(
      `/api/v1/identity/users/roles/${id}`,
      request,
      config
    );

    dispatch({ type: USER_ROLES_UPDATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: USER_ROLES_UPDATE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
