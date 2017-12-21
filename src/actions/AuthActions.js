// ACTION CREATOR
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
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
    dispatch({ type: LOGIN_USER });
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

    // Der key der scene wird als Methode umgeformt und kann durch einen Aufruf dorthin navigieren
    Actions.main();
};

 const loginUserFail = (dispatch) => dispatch({ type: LOGIN_USER_FAIL });
