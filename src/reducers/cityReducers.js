import {
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_LIST_FAIL,
  CITY_REGISTER_REQUEST,
  CITY_REGISTER_SUCCESS,
  CITY_REGISTER_FAIL,
  CITY_REGISTER_RESET,
} from "../constants/cityConstants";

export const cityListReducer = (state = { cities: [] }, action) => {
  switch (action.type) {
    case CITY_LIST_REQUEST:
      return { loading: true, cities: [] };
    case CITY_LIST_SUCCESS:
      return { loading: false, cities: action.payload };
    case CITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cityRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_REGISTER_REQUEST:
      return { loading: true };
    case CITY_REGISTER_SUCCESS:
      return { loading: false, success: true, city: action.payload };
    case CITY_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case CITY_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};
