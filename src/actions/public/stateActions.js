import axios from "axios";

import { extractErrorMessage } from "../authConfig";
import {
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
  STATE_LIST_FAIL,
  STATE_REGISTER_REQUEST,
  STATE_REGISTER_SUCCESS,
  STATE_REGISTER_FAIL,
} from "../../constants/stateConstants";

export const listStates = (filter) => async (dispatch) => {
  try {
    dispatch({ type: STATE_LIST_REQUEST });

    const { data: body } = await axios.get(`/api/v1/people/states`, {
      params: filter,
    });

    dispatch({ type: STATE_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: STATE_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const registerState = (command) => async (dispatch) => {
  try {
    dispatch({ type: STATE_REGISTER_REQUEST });

    const { data: body } = await axios.post(`/api/v1/people/states`, command);

    dispatch({ type: STATE_REGISTER_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: STATE_REGISTER_FAIL, payload: extractErrorMessage(err) });
  }
};
