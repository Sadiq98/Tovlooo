import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  ROLE_LIST_REQUEST,
  ROLE_LIST_SUCCESS,
  ROLE_LIST_FAIL,
  ROLE_CREATE_REQUEST,
  ROLE_CREATE_SUCCESS,
  ROLE_CREATE_FAIL,
  ROLE_DELETE_REQUEST,
  ROLE_DELETE_SUCCESS,
  ROLE_DELETE_FAIL,
  ROLE_PERMISSIONS_BY_ROLE_REQUEST,
  ROLE_PERMISSIONS_BY_ROLE_SUCCESS,
  ROLE_PERMISSIONS_BY_ROLE_FAIL,
  ROLE_CLAIMS_LIST_REQUEST,
  ROLE_CLAIMS_LIST_SUCCESS,
  ROLE_CLAIMS_LIST_FAIL,
  ROLE_CLAIM_DETAILS_REQUEST,
  ROLE_CLAIM_DETAILS_SUCCESS,
  ROLE_CLAIM_DETAILS_FAIL,
  ROLE_PERMISSIONS_UPDATE_REQUEST,
  ROLE_PERMISSIONS_UPDATE_SUCCESS,
  ROLE_PERMISSIONS_UPDATE_FAIL,
  ROLE_CLAIM_DELETE_REQUEST,
  ROLE_CLAIM_DELETE_SUCCESS,
  ROLE_CLAIM_DELETE_FAIL,
} from "../../constants/roleConstants";

export const listRoles = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/identity/roles`, config);

    dispatch({ type: ROLE_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: ROLE_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const createRole = (request) => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_CREATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.post(
      `/api/v1/identity/roles`,
      request,
      config
    );

    dispatch({ type: ROLE_CREATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: ROLE_CREATE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const deleteRole = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_DELETE_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.delete(
      `/api/v1/identity/roles/${id}`,
      config
    );

    dispatch({ type: ROLE_DELETE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: ROLE_DELETE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const getPermissionsByRoleId = (roleId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_PERMISSIONS_BY_ROLE_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/identity/roles/permissions/byrole/${roleId}`,
      config
    );

    dispatch({ type: ROLE_PERMISSIONS_BY_ROLE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: ROLE_PERMISSIONS_BY_ROLE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const listAllClaims = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_CLAIMS_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/identity/roles/permissions`,
      config
    );

    dispatch({ type: ROLE_CLAIMS_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: ROLE_CLAIMS_LIST_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const getClaimById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_CLAIM_DETAILS_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(
      `/api/v1/identity/roles/permissions/${id}`,
      config
    );

    dispatch({ type: ROLE_CLAIM_DETAILS_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: ROLE_CLAIM_DETAILS_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const updatePermissions = (request) => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_PERMISSIONS_UPDATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.put(
      `/api/v1/identity/roles/permissions/update`,
      request,
      config
    );

    dispatch({ type: ROLE_PERMISSIONS_UPDATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: ROLE_PERMISSIONS_UPDATE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const deleteClaimById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLE_CLAIM_DELETE_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.delete(
      `/api/v1/identity/roles/permissions/${id}`,
      config
    );

    dispatch({ type: ROLE_CLAIM_DELETE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: ROLE_CLAIM_DELETE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
