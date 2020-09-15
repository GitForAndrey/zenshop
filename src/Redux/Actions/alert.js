import { ALERTSHOW_TP, ALERTHIDE_TP } from '../types';

export const ALERTSHOW = (text, type) => {
  const payload = { text, type };
  return (dispatch) => {
    dispatch({ type: ALERTSHOW_TP, payload });
    setTimeout(() => {
      dispatch(ALERTHIDE());
    }, 4000);
  };
};
export const ALERTHIDE = () => ({ type: ALERTHIDE_TP });
