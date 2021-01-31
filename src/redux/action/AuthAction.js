  
import types from "../reducers/Types";

export const registerUser = user => ({
  type: types.registerUser,
  payload: user
});

export const registerError = err => ({
  type: types.getErrors,
  payload: err
});

export const loginUser = user => ({
  type: types.loginUser,
  payload: user
});

export const loginError = err => ({
  type: types.getErrors,
  payload: err
});

export const loginSuccess = user => ({
  type: types.loginSuccess,
  payload: user
});

export const reset = () => ({
  type: types.reset
});

export const resetError = () => ({
  type: types.resetError
});

export const getProfile = token => ({
  type: types.getProfile,
  payload: token
});

export const logoutRequest = user => ({
  type: types.logoutRequest,
  payload: user
});

export const logout = user => ({
  type: types.logout,
  payload: user
});

export const requestWithToken = request => ({
  type: types.requestWithToken,
  payload: request
});

export const requestWithoutToken = request => ({
  type: types.requestWithoutToken,
  payload: request
});

export const messageResp = resp => ({
  type: types.messageResp,
  payload: resp
});