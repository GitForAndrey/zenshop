import {
  SELECTED_ITEM_TP,
  LOGIN_TP,
  REGISTRATION_TP,
  OPENMODAL_TP,
  CLOSEMODAL_TP,
  GETDATAAXIOS_TP,
  DELETE_ITEM_TP,
  QUANTITY_ITEM_TP,
  LOADTRUE_TP,
  LOADFALSE_TP,
  ALERTSHOW_TP,
  ALERTHIDE_TP,
} from './types';

import axios from 'axios';

export const SELECTED = (item) => ({ type: SELECTED_ITEM_TP, item });

export const LOGIN = () => ({ type: LOGIN_TP });
export const REGISTRATION = () => ({ type: REGISTRATION_TP });
export const OPENMODAL = () => ({ type: OPENMODAL_TP });
export const CLOSEMODAL = () => ({ type: CLOSEMODAL_TP });
export const GETDATAAXIOS = (data) => ({ type: GETDATAAXIOS_TP, data });
export const LOADTRUE = () => ({ type: LOADTRUE_TP });
export const LOADFALSE = () => ({ type: LOADFALSE_TP });

export const ALERTSHOW = (text, type) => {
  const payload = { text, type };
  return (dispatch) => {
    dispatch({ type: ALERTSHOW_TP, payload });
    setTimeout(() => {
      dispatch(ALERTHIDE());
    }, 3000);
  };
};
export const ALERTHIDE = () => ({ type: ALERTHIDE_TP });

export const GETDATA = () => {
  return (dispatch) => {
    dispatch(LOADTRUE());
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
      .then((res) => {
        dispatch(LOADFALSE());
        dispatch(GETDATAAXIOS(res.data));
      })
      .catch((err) => {
        dispatch(LOADFALSE());
        dispatch(ALERTSHOW(err.message, 'error'));
      });
  };
};

export const DELETE_ITEM = (item) => ({ type: DELETE_ITEM_TP, item });
export const QUANTITY_ITEM = (value, item) => {
  const payload = { value, item };
  return { type: QUANTITY_ITEM_TP, payload };
};
