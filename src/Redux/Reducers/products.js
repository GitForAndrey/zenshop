import {
  SELECTED_ITEM_TP,
  GETDATAAXIOS_TP,
  LOADTRUE_TP,
  LOADFALSE_TP,
  ALERTSHOW_TP,
  ALERTHIDE_TP,
} from '../types';

const initialState = {
  products: [],
  selected: {},
  loading: false,
  alert: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ITEM_TP:
      return { ...state, selected: action.item };
    case GETDATAAXIOS_TP:
      return { ...state, products: action.data };
    case LOADTRUE_TP:
      return { ...state, loading: true };
    case LOADFALSE_TP:
      return { ...state, loading: false };
    case ALERTSHOW_TP:
      return { ...state, alert: { text: action.payload.text, type: action.payload.type } };
    case ALERTHIDE_TP:
      return { ...state, alert: false };

    default:
      return state;
  }
};
export default products;
