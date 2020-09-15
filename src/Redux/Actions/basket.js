import { DELETE_ITEM_TP, QUANTITY_ITEM_TP, ADDITEM_TP } from '../types';

//------------------------------------------------------------------------------

export const DELETE_ITEM = (item) => ({ type: DELETE_ITEM_TP, item });
export const QUANTITY_ITEM = (value, item) => {
  const payload = { value, item };
  return { type: QUANTITY_ITEM_TP, payload };
};
export const ADDITEM = (item) => ({ type: ADDITEM_TP, item });
