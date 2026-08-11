import {
  ROLE_LIST_REQUEST,
  ROLE_LIST_SUCCESS,
  ROLE_LIST_FAIL,
  ROLE_CREATE_REQUEST,
  ROLE_CREATE_SUCCESS,
  ROLE_CREATE_FAIL,
  ROLE_CREATE_RESET,
  ROLE_DELETE_REQUEST,
  ROLE_DELETE_SUCCESS,
  ROLE_DELETE_FAIL,
  ROLE_PERMISSIONS_BY_ROLE_REQUEST,
  ROLE_PERMISSIONS_BY_ROLE_SUCCESS,
  ROLE_PERMISSIONS_BY_ROLE_FAIL,
  ROLE_CLAIMS_LIST_REQUEST,
  ROLE_CLAIMS_LIST_SUCCESS,
  ROLE_CLAIMS_LIST_FAIL,
  ROLE_CLAIM_DETAILS_REQUEST,
  ROLE_CLAIM_DETAILS_SUCCESS,
  ROLE_CLAIM_DETAILS_FAIL,
  ROLE_PERMISSIONS_UPDATE_REQUEST,
  ROLE_PERMISSIONS_UPDATE_SUCCESS,
  ROLE_PERMISSIONS_UPDATE_FAIL,
  ROLE_PERMISSIONS_UPDATE_RESET,
  ROLE_CLAIM_DELETE_REQUEST,
  ROLE_CLAIM_DELETE_SUCCESS,
  ROLE_CLAIM_DELETE_FAIL,
} from "../constants/roleConstants";

export const roleListReducer = (state = { roles: [] }, action) => {
  switch (action.type) {
    case ROLE_LIST_REQUEST:
      return { loading: true, roles: [] };
    case ROLE_LIST_SUCCESS:
      return { loading: false, roles: action.payload };
    case ROLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const roleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROLE_CREATE_REQUEST:
      return { loading: true };
    case ROLE_CREATE_SUCCESS:
      return { loading: false, success: true, role: action.payload };
    case ROLE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ROLE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const roleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ROLE_DELETE_REQUEST:
      return { loading: true };
    case ROLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ROLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const rolePermissionsByRoleReducer = (
  state = { permissions: [] },
  action
) => {
  switch (action.type) {
    case ROLE_PERMISSIONS_BY_ROLE_REQUEST:
      return { loading: true, permissions: [] };
    case ROLE_PERMISSIONS_BY_ROLE_SUCCESS:
      return { loading: false, permissions: action.payload };
    case ROLE_PERMISSIONS_BY_ROLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const roleClaimsListReducer = (state = { claims: [] }, action) => {
  switch (action.type) {
    case ROLE_CLAIMS_LIST_REQUEST:
      return { loading: true, claims: [] };
    case ROLE_CLAIMS_LIST_SUCCESS:
      return { loading: false, claims: action.payload };
    case ROLE_CLAIMS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const roleClaimDetailsReducer = (state = { claim: {} }, action) => {
  switch (action.type) {
    case ROLE_CLAIM_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ROLE_CLAIM_DETAILS_SUCCESS:
      return { loading: false, claim: action.payload };
    case ROLE_CLAIM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const rolePermissionsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROLE_PERMISSIONS_UPDATE_REQUEST:
      return { loading: true };
    case ROLE_PERMISSIONS_UPDATE_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case ROLE_PERMISSIONS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ROLE_PERMISSIONS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const roleClaimDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ROLE_CLAIM_DELETE_REQUEST:
      return { loading: true };
    case ROLE_CLAIM_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ROLE_CLAIM_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
