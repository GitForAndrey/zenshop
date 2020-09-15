import {
  SETLOGIN_TP,
  OPENMODAL_TP,
  SETLOGOUT_TP,
  CLOSEMODAL_TP,
  ALERTFORMSHOW_TP,
  ALERTFORMHIDE_TP,
  BUTTONACTIVE_TP,
  BUTTONDISABLE_TP,
  CHANGEFORM_TP,
  SETUSER_TP,
} from '../types';

const initialState = {
  login: false,
  showModal: false,
  alertForm: false,
  button: false,
  whatForm: true,
  user: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case SETLOGIN_TP:
      return { ...state, login: true };
    case SETLOGOUT_TP:
      return { ...state, login: false };
    case OPENMODAL_TP:
      return { ...state, showModal: !state.showModal };
    case CLOSEMODAL_TP:
      return { ...state, showModal: false };
    case ALERTFORMSHOW_TP:
      return { ...state, alertForm: { text: action.payload.text, type: action.payload.type } };
    case ALERTFORMHIDE_TP:
      return { ...state, alertForm: false };
    case BUTTONACTIVE_TP:
      return { ...state, button: false };
    case BUTTONDISABLE_TP:
      return { ...state, button: true };
    case CHANGEFORM_TP:
      return { ...state, whatForm: !state.whatForm };
    case SETUSER_TP:
      return { ...state, user: action.user };

    default:
      return state;
  }
};
export default login;
