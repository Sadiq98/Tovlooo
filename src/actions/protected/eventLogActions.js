import axios from "axios";

import { getAuthConfig, extractErrorMessage } from "../authConfig";
import {
  EVENT_LOG_LIST_REQUEST,
  EVENT_LOG_LIST_SUCCESS,
  EVENT_LOG_LIST_FAIL,
  EVENT_LOG_CREATE_REQUEST,
  EVENT_LOG_CREATE_SUCCESS,
  EVENT_LOG_CREATE_FAIL,
} from "../../constants/eventLogConstants";

export const listEventLogs = (filter) => async (dispatch, getState) => {
  try {
    dispatch({ type: EVENT_LOG_LIST_REQUEST });

    const config = getAuthConfig(getState);
    const { data: body } = await axios.get(`/api/v1/identity/eventlogs`, {
      ...config,
      params: filter,
    });

    dispatch({ type: EVENT_LOG_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: EVENT_LOG_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const logCustomEvent = (request) => async (dispatch, getState) => {
  try {
    dispatch({ type: EVENT_LOG_CREATE_REQUEST });

    const config = getAuthConfig(getState, {
      "Content-Type": "application/json",
    });
    const { data: body } = await axios.post(
      `/api/v1/identity/eventlogs`,
      request,
      config
    );

    dispatch({ type: EVENT_LOG_CREATE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: EVENT_LOG_CREATE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
