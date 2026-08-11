import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
  COUNTRY_LIST_FAIL,
  COUNTRY_REGISTER_REQUEST,
  COUNTRY_REGISTER_SUCCESS,
  COUNTRY_REGISTER_FAIL,
  COUNTRY_REGISTER_RESET,
} from "../constants/countryConstants";

export const countryListReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case COUNTRY_LIST_REQUEST:
      return { loading: true, countries: [] };
    case COUNTRY_LIST_SUCCESS:
      return { loading: false, countries: action.payload };
    case COUNTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const countryRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_REGISTER_REQUEST:
      return { loading: true };
    case COUNTRY_REGISTER_SUCCESS:
      return { loading: false, success: true, country: action.payload };
    case COUNTRY_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case COUNTRY_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};
