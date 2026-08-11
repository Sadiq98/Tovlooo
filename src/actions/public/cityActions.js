import axios from "axios";

import { extractErrorMessage } from "../authConfig";
import {
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_LIST_FAIL,
  CITY_REGISTER_REQUEST,
  CITY_REGISTER_SUCCESS,
  CITY_REGISTER_FAIL,
} from "../../constants/cityConstants";

export const listCities = (filter) => async (dispatch) => {
  try {
    dispatch({ type: CITY_LIST_REQUEST });

    const { data: body } = await axios.get(`/api/v1/people/city`, {
      params: filter,
    });

    dispatch({ type: CITY_LIST_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: CITY_LIST_FAIL, payload: extractErrorMessage(err) });
  }
};

export const registerCity = (command) => async (dispatch) => {
  try {
    dispatch({ type: CITY_REGISTER_REQUEST });

    const { data: body } = await axios.post(`/api/v1/people/city`, command);

    dispatch({ type: CITY_REGISTER_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: CITY_REGISTER_FAIL, payload: extractErrorMessage(err) });
  }
};
