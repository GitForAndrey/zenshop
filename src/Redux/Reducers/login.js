import { LOGIN_TP, REGISTRATION_TP, OPENMODAL_TP, CLOSEMODAL_TP } from '../types';

const initialState = {
  login: false,
  registered: false,
  showModal: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TP:
      return { ...state, login: true };
    case REGISTRATION_TP:
      return { ...state, registered: true };
    case OPENMODAL_TP:
      return { ...state, showModal: !state.showModal };
    case CLOSEMODAL_TP:
      return { ...state, showModal: false };

    default:
      return state;
  }
};
export default login;
