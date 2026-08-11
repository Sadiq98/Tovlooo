import axios from "axios";

import { extractErrorMessage } from "../authConfig";
import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
  COUNTRY_LIST_FAIL,
  COUNTRY_REGISTER_REQUEST,
  COUNTRY_REGISTER_SUCCESS,
  COUNTRY_REGISTER_FAIL,
} from "../../constants/countryConstants";

export const listCountries = (filter) => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_LIST_REQUEST });

    const { data: body } = await axios.get(`/api/v1/people/country`, {
      params: filter,
    });

    dispatch({ type: COUNTRY_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: COUNTRY_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const registerCountry = (command) => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_REGISTER_REQUEST });

    const { data: body } = await axios.post(
      `/api/v1/people/country`,
      command
    );

    dispatch({ type: COUNTRY_REGISTER_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: COUNTRY_REGISTER_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
