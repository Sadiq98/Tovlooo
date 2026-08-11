import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productGetReducer,
  productImageReducer,
  productImageUploadReducer,
  productImageReplaceReducer,
  productImageDeleteReducer,
  productListReducer,
  productReviewCreateReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import {
  userLoginReducer,
  authRegisterReducer,
  authConfirmEmailReducer,
  authConfirmPhoneReducer,
  authForgotPasswordReducer,
  authResetPasswordReducer,
  authRefreshTokenReducer,
  authGoogleLoginReducer,
} from "./reducers/authReducers";
import {
  userListReducer,
  userDetailsReducer,
  userUpdateReducer,
  userRolesReducer,
  userRolesUpdateReducer,
} from "./reducers/userReducers";
import {
  roleListReducer,
  roleCreateReducer,
  roleDeleteReducer,
  rolePermissionsByRoleReducer,
  roleClaimsListReducer,
  roleClaimDetailsReducer,
  rolePermissionsUpdateReducer,
  roleClaimDeleteReducer,
} from "./reducers/roleReducers";
import {
  eventLogListReducer,
  eventLogCreateReducer,
} from "./reducers/eventLogReducers";
import {
  cartDetailsReducer,
  cartListReducer,
  cartCreateReducer,
  cartDeleteReducer,
  cartClearReducer,
} from "./reducers/cartReducers";
import {
  cartItemDetailsReducer,
  cartItemListReducer,
  cartItemAddReducer,
  cartItemUpdateReducer,
  cartItemDeleteReducer,
} from "./reducers/cartItemReducers";
import {
  customerListReducer,
  customerDetailsReducer,
  customerRegisterReducer,
  customerUpdateReducer,
  customerDeleteReducer,
} from "./reducers/customerReducers";
import {
  petListReducer,
  petDetailsReducer,
  petRegisterReducer,
  petUpdateReducer,
  petDeleteReducer,
} from "./reducers/petReducers";
import { cityListReducer, cityRegisterReducer } from "./reducers/cityReducers";
import {
  countryListReducer,
  countryRegisterReducer,
} from "./reducers/countryReducers";
import { stateListReducer, stateRegisterReducer } from "./reducers/stateReducers";
import { orderListReducer, orderRegisterReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productGet: productGetReducer,
  productImage: productImageReducer,
  productImageUpload: productImageUploadReducer,
  productImageReplace: productImageReplaceReducer,
  productImageDelete: productImageDeleteReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,

  userLogin: userLoginReducer,
  authRegister: authRegisterReducer,
  authConfirmEmail: authConfirmEmailReducer,
  authConfirmPhone: authConfirmPhoneReducer,
  authForgotPassword: authForgotPasswordReducer,
  authResetPassword: authResetPasswordReducer,
  authRefreshToken: authRefreshTokenReducer,
  authGoogleLogin: authGoogleLoginReducer,

  userList: userListReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userRoles: userRolesReducer,
  userRolesUpdate: userRolesUpdateReducer,

  roleList: roleListReducer,
  roleCreate: roleCreateReducer,
  roleDelete: roleDeleteReducer,
  rolePermissionsByRole: rolePermissionsByRoleReducer,
  roleClaimsList: roleClaimsListReducer,
  roleClaimDetails: roleClaimDetailsReducer,
  rolePermissionsUpdate: rolePermissionsUpdateReducer,
  roleClaimDelete: roleClaimDeleteReducer,

  eventLogList: eventLogListReducer,
  eventLogCreate: eventLogCreateReducer,

  cartDetails: cartDetailsReducer,
  cartList: cartListReducer,
  cartCreate: cartCreateReducer,
  cartDelete: cartDeleteReducer,
  cartClear: cartClearReducer,

  cartItemDetails: cartItemDetailsReducer,
  cartItemList: cartItemListReducer,
  cartItemAdd: cartItemAddReducer,
  cartItemUpdate: cartItemUpdateReducer,
  cartItemDelete: cartItemDeleteReducer,

  customerList: customerListReducer,
  customerDetails: customerDetailsReducer,
  customerRegister: customerRegisterReducer,
  customerUpdate: customerUpdateReducer,
  customerDelete: customerDeleteReducer,

  petList: petListReducer,
  petDetails: petDetailsReducer,
  petRegister: petRegisterReducer,
  petUpdate: petUpdateReducer,
  petDelete: petDeleteReducer,

  cityList: cityListReducer,
  cityRegister: cityRegisterReducer,

  countryList: countryListReducer,
  countryRegister: countryRegisterReducer,

  stateList: stateListReducer,
  stateRegister: stateRegisterReducer,

  orderList: orderListReducer,
  orderRegister: orderRegisterReducer,
});

const initialState = {};
const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
