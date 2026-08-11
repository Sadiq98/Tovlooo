import {
  EVENT_LOG_LIST_REQUEST,
  EVENT_LOG_LIST_SUCCESS,
  EVENT_LOG_LIST_FAIL,
  EVENT_LOG_CREATE_REQUEST,
  EVENT_LOG_CREATE_SUCCESS,
  EVENT_LOG_CREATE_FAIL,
  EVENT_LOG_CREATE_RESET,
} from "../constants/eventLogConstants";

export const eventLogListReducer = (state = { eventLogs: [] }, action) => {
  switch (action.type) {
    case EVENT_LOG_LIST_REQUEST:
      return { loading: true, eventLogs: [] };
    case EVENT_LOG_LIST_SUCCESS:
      return { loading: false, eventLogs: action.payload };
    case EVENT_LOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventLogCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_LOG_CREATE_REQUEST:
      return { loading: true };
    case EVENT_LOG_CREATE_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case EVENT_LOG_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case EVENT_LOG_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
