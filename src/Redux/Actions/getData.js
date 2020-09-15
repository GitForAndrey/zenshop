import axios from 'axios';
import { GETDATAAXIOS_TP, LOADTRUE_TP, LOADFALSE_TP } from '../types';
import { ALERTSHOW } from './alert';

//--------------------------------------------------------

export const GETDATAAXIOS = (data) => ({ type: GETDATAAXIOS_TP, data });
export const LOADTRUE = () => ({ type: LOADTRUE_TP });
export const LOADFALSE = () => ({ type: LOADFALSE_TP });

export const GETDATA = () => {
  return (dispatch) => {
    dispatch(LOADTRUE());
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_limit=6`)
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
