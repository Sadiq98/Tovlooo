import {
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
  STATE_LIST_FAIL,
  STATE_REGISTER_REQUEST,
  STATE_REGISTER_SUCCESS,
  STATE_REGISTER_FAIL,
  STATE_REGISTER_RESET,
} from "../constants/stateConstants";

export const stateListReducer = (state = { states: [] }, action) => {
  switch (action.type) {
    case STATE_LIST_REQUEST:
      return { loading: true, states: [] };
    case STATE_LIST_SUCCESS:
      return { loading: false, states: action.payload };
    case STATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const stateRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case STATE_REGISTER_REQUEST:
      return { loading: true };
    case STATE_REGISTER_SUCCESS:
      return { loading: false, success: true, state: action.payload };
    case STATE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case STATE_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};
