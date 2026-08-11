import {
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_RESET,
  AUTH_CONFIRM_EMAIL_REQUEST,
  AUTH_CONFIRM_EMAIL_SUCCESS,
  AUTH_CONFIRM_EMAIL_FAIL,
  AUTH_CONFIRM_PHONE_REQUEST,
  AUTH_CONFIRM_PHONE_SUCCESS,
  AUTH_CONFIRM_PHONE_FAIL,
  AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_FORGOT_PASSWORD_FAIL,
  AUTH_FORGOT_PASSWORD_RESET,
  AUTH_RESET_PASSWORD_REQUEST,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_FAIL,
  AUTH_RESET_PASSWORD_RESET,
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
} from "../constants/authConstants";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const userLoginReducer = (
  state = { userInfo: userInfoFromStorage },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const authRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST:
      return { loading: true };
    case AUTH_REGISTER_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case AUTH_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const authConfirmEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_CONFIRM_EMAIL_REQUEST:
      return { loading: true };
    case AUTH_CONFIRM_EMAIL_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case AUTH_CONFIRM_EMAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const authConfirmPhoneReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_CONFIRM_PHONE_REQUEST:
      return { loading: true };
    case AUTH_CONFIRM_PHONE_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case AUTH_CONFIRM_PHONE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const authForgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case AUTH_FORGOT_PASSWORD_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case AUTH_FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_FORGOT_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const authResetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_RESET_PASSWORD_REQUEST:
      return { loading: true };
    case AUTH_RESET_PASSWORD_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case AUTH_RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_RESET_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const authRefreshTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_REFRESH_TOKEN_REQUEST:
      return { loading: true };
    case AUTH_REFRESH_TOKEN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case AUTH_REFRESH_TOKEN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const authGoogleLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_GOOGLE_LOGIN_REQUEST:
      return { loading: true };
    case AUTH_GOOGLE_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case AUTH_GOOGLE_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
