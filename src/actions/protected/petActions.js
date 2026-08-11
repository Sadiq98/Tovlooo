import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  PET_LIST_REQUEST,
  PET_LIST_SUCCESS,
  PET_LIST_FAIL,
  PET_DETAILS_REQUEST,
  PET_DETAILS_SUCCESS,
  PET_DETAILS_FAIL,
  PET_REGISTER_REQUEST,
  PET_REGISTER_SUCCESS,
  PET_REGISTER_FAIL,
  PET_UPDATE_REQUEST,
  PET_UPDATE_SUCCESS,
  PET_UPDATE_FAIL,
  PET_DELETE_REQUEST,
  PET_DELETE_SUCCESS,
  PET_DELETE_FAIL,
} from "../../constants/petConstants";

export const getPetsByCustomer = (customerId) => async (dispatch, getState) => {
  try {
    dispatch({ type: PET_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/people/pet`, {
      ...config,
      params: { customerId },
    });

    dispatch({ type: PET_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PET_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const getPetById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PET_DETAILS_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/people/pet/${id}`, config);

    dispatch({ type: PET_DETAILS_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PET_DETAILS_FAIL, payload: extractErrorMessage(err) });
  }
};

export const registerPet = (command) => async (dispatch, getState) => {
  try {
    dispatch({ type: PET_REGISTER_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.post(
      `/api/v1/people/pet`,
      command,
      config
    );

    dispatch({ type: PET_REGISTER_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PET_REGISTER_FAIL, payload: extractErrorMessage(err) });
  }
};

export const updatePet = (id, command) => async (dispatch, getState) => {
  try {
    dispatch({ type: PET_UPDATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.put(
      `/api/v1/people/pet/${id}`,
      command,
      config
    );

    dispatch({ type: PET_UPDATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: PET_UPDATE_FAIL, payload: extractErrorMessage(err) });
  }
};

export const deletePet = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PET_DELETE_REQUEST });

    const config = getAuthConfig(getState);
    await axios.delete(`/api/v1/people/pet/${id}`, config);

    dispatch({ type: PET_DELETE_SUCCESS });
  } catch (err) {
    dispatch({ type: PET_DELETE_FAIL, payload: extractErrorMessage(err) });
  }
};
