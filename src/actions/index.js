// ACTION CREATOR
import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
 } from './types';

// Wert von der email auslesen
export const emailChanged = (text) => {
  return {
  type: EMAIL_CHANGED,
  payload: text
};
};

// Wert von dem password auslesen
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loginUserSuccess(dispatch, user))
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
  });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user });
};

 const loginUserFail = (dispatch) => dispatch({ type: LOGIN_USER_FAIL });
