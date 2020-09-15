import {
  ALERTFORMSHOW_TP,
  ALERTFORMHIDE_TP,
  BUTTONACTIVE_TP,
  BUTTONDISABLE_TP,
  SETLOGIN_TP,
  SETLOGOUT_TP,
  OPENMODAL_TP,
  CLOSEMODAL_TP,
  CHANGEFORM_TP,
  SETUSER_TP,
} from '../types';
import { ALERTSHOW, ALERTHIDE } from './alert';

import firebase from '../../firebase';

//--------------------------------------------------------------------------------------------
export const SETLOGIN = () => ({ type: SETLOGIN_TP });
export const SETLOGOUT = () => ({ type: SETLOGOUT_TP });
export const CHANGEFORM = () => ({ type: CHANGEFORM_TP });
export const OPENMODAL = () => ({ type: OPENMODAL_TP });
export const CLOSEMODAL = () => ({ type: CLOSEMODAL_TP });
export const BUTTONACTIVE = () => ({ type: BUTTONACTIVE_TP });
export const BUTTONDISABLE = () => ({ type: BUTTONDISABLE_TP });
export const SETUSER = (user) => ({ type: SETUSER_TP, user });

export const ALERTFORMSHOW = (text, type) => {
  const payload = { text, type };
  return (dispatch) => {
    dispatch({ type: ALERTFORMSHOW_TP, payload });
    setTimeout(() => {
      dispatch(ALERTFORMHIDE());
    }, 5000);
  };
};
export const ALERTFORMHIDE = () => ({ type: ALERTFORMHIDE_TP });
export const SIGNUP = (email, password, nickname) => (dispatch) => {
  dispatch(BUTTONDISABLE());
  const app = firebase.auth();
  app
    .createUserWithEmailAndPassword(email, password)
    .then((e) => {
      dispatch(BUTTONACTIVE());
      app.currentUser
        .updateProfile({
          displayName: nickname,
        })
        .then(dispatch(ALERTSHOW('Вы успешно зарегестрированы!!!!!', 'success')))
        .catch(function (e) {
          dispatch(ALERTFORMSHOW(e.message, 'Ошибка!!'));
        });
      dispatch(CHANGEFORM());
      dispatch(CLOSEMODAL());
    })
    .catch(function (e) {
      dispatch(ALERTFORMSHOW(e.message, 'Ошибка!!'));
      dispatch(BUTTONACTIVE());
    });
};
export const LOGIN = (email, password) => (dispatch) => {
  dispatch(BUTTONDISABLE());
  const app = firebase.auth();
  app
    .signInWithEmailAndPassword(email, password)
    .then((e) => {
      let user = app.currentUser;
      dispatch(SETLOGIN());
      dispatch(SETUSER(user));
      dispatch(CLOSEMODAL());
    })
    .catch(function (e) {
      dispatch(ALERTFORMSHOW(e.message, 'Ошибка!!'));
    });
  dispatch(BUTTONACTIVE());
};
export const LOGOUT = () => (dispatch) => {
  const app = firebase.auth();
  app.signOut().then((e) => {
    dispatch(SETLOGOUT());
    dispatch(SETUSER({}));
  });
};
