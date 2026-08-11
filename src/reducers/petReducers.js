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
  PET_REGISTER_RESET,
  PET_UPDATE_REQUEST,
  PET_UPDATE_SUCCESS,
  PET_UPDATE_FAIL,
  PET_UPDATE_RESET,
  PET_DELETE_REQUEST,
  PET_DELETE_SUCCESS,
  PET_DELETE_FAIL,
} from "../constants/petConstants";

export const petListReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case PET_LIST_REQUEST:
      return { loading: true, pets: [] };
    case PET_LIST_SUCCESS:
      return { loading: false, pets: action.payload };
    case PET_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const petDetailsReducer = (state = { pet: {} }, action) => {
  switch (action.type) {
    case PET_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PET_DETAILS_SUCCESS:
      return { loading: false, pet: action.payload };
    case PET_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const petRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case PET_REGISTER_REQUEST:
      return { loading: true };
    case PET_REGISTER_SUCCESS:
      return { loading: false, success: true, pet: action.payload };
    case PET_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case PET_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const petUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PET_UPDATE_REQUEST:
      return { loading: true };
    case PET_UPDATE_SUCCESS:
      return { loading: false, success: true, pet: action.payload };
    case PET_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PET_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const petDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PET_DELETE_REQUEST:
      return { loading: true };
    case PET_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PET_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
