import axios from "axios";

import { extractErrorMessage } from "../authConfig";
import {
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  AUTH_CONFIRM_EMAIL_REQUEST,
  AUTH_CONFIRM_EMAIL_SUCCESS,
  AUTH_CONFIRM_EMAIL_FAIL,
  AUTH_CONFIRM_PHONE_REQUEST,
  AUTH_CONFIRM_PHONE_SUCCESS,
  AUTH_CONFIRM_PHONE_FAIL,
  AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_FORGOT_PASSWORD_FAIL,
  AUTH_RESET_PASSWORD_REQUEST,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  AUTH_REFRESH_TOKEN_REQUEST,
  AUTH_REFRESH_TOKEN_SUCCESS,
  AUTH_REFRESH_TOKEN_FAIL,
  AUTH_GOOGLE_LOGIN_REQUEST,
  AUTH_GOOGLE_LOGIN_SUCCESS,
  AUTH_GOOGLE_LOGIN_FAIL,
} from "../../constants/authConstants";

// Backend wraps every response as { data, messages, succeeded } on success
// and { source, exception, errorCode, data: null, messages: null, succeeded: false }
// on failure — see tovlo_backend/docs/authentication-api.md.

export const register = (request) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REGISTER_REQUEST });

    const { data: body } = await axios.post(
      `/api/v1/identity/register`,
      request
    );

    dispatch({ type: AUTH_REGISTER_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({ type: AUTH_REGISTER_FAIL, payload: extractErrorMessage(err) });
  }
};

export const confirmEmail = (userId, code) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_CONFIRM_EMAIL_REQUEST });

    const { data: body } = await axios.get(`/api/v1/identity/confirm-email`, {
      params: { userId, code },
    });

    dispatch({ type: AUTH_CONFIRM_EMAIL_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: AUTH_CONFIRM_EMAIL_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const confirmPhoneNumber = (userId, code) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_CONFIRM_PHONE_REQUEST });

    const { data: body } = await axios.get(
      `/api/v1/identity/confirm-phone-number`,
      { params: { userId, code } }
    );

    dispatch({ type: AUTH_CONFIRM_PHONE_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: AUTH_CONFIRM_PHONE_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const forgotPassword = (request) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_FORGOT_PASSWORD_REQUEST });

    const { data: body } = await axios.post(
      `/api/v1/identity/forgot-password`,
      request
    );

    dispatch({ type: AUTH_FORGOT_PASSWORD_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: AUTH_FORGOT_PASSWORD_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

export const resetPassword = (request) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_RESET_PASSWORD_REQUEST });

    const { data: body } = await axios.post(
      `/api/v1/identity/reset-password`,
      request
    );

    dispatch({ type: AUTH_RESET_PASSWORD_SUCCESS, payload: body.data });
  } catch (err) {
    dispatch({
      type: AUTH_RESET_PASSWORD_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

// request: { email, password, provider: "Local" }
// Never send provider: "Google" here — the backend does a case-sensitive,
// unvalidated match and silently falls through to password-login logic,
// returning a misleading 401. Use googleLogin() below instead.
export const login = (request) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data: body } = await axios.post(
      `/api/v1/identity/tokens`,
      request
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: body.data });
    localStorage.setItem("userInfo", JSON.stringify(body.data));
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAIL, payload: extractErrorMessage(err) });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

// request: { token: <expired access token>, refreshToken }
export const refreshToken = (request) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REFRESH_TOKEN_REQUEST });

    const { data: body } = await axios.post(
      `/api/v1/identity/tokens/refresh`,
      request
    );

    dispatch({ type: AUTH_REFRESH_TOKEN_SUCCESS, payload: body.data });
    localStorage.setItem("userInfo", JSON.stringify(body.data));
  } catch (err) {
    dispatch({
      type: AUTH_REFRESH_TOKEN_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};

// request: { token: <Google id_token> }
// A malformed/invalid Google token currently returns 500, not 401 — always
// branch on `succeeded`/thrown error here, never on HTTP status for this call.
export const googleLogin = (request) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_GOOGLE_LOGIN_REQUEST });

    const { data: body } = await axios.post(
      `/api/v1/identity/tokens/google`,
      request
    );

    dispatch({ type: AUTH_GOOGLE_LOGIN_SUCCESS, payload: body.data });
    localStorage.setItem("userInfo", JSON.stringify(body.data));
  } catch (err) {
    dispatch({
      type: AUTH_GOOGLE_LOGIN_FAIL,
      payload: extractErrorMessage(err),
    });
  }
};
