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
  USER_UPDATE_RESET,
  USER_ROLES_REQUEST,
  USER_ROLES_SUCCESS,
  USER_ROLES_FAIL,
  USER_ROLES_UPDATE_REQUEST,
  USER_ROLES_UPDATE_SUCCESS,
  USER_ROLES_UPDATE_FAIL,
  USER_ROLES_UPDATE_RESET,
} from "../constants/userConstants";

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, users: [] };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userRolesReducer = (state = { roles: [] }, action) => {
  switch (action.type) {
    case USER_ROLES_REQUEST:
      return { loading: true, roles: [] };
    case USER_ROLES_SUCCESS:
      return { loading: false, roles: action.payload };
    case USER_ROLES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userRolesUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ROLES_UPDATE_REQUEST:
      return { loading: true };
    case USER_ROLES_UPDATE_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case USER_ROLES_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_ROLES_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
