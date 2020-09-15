import { ADDITEMWISHLIST_TP, DELITEMWISHLIST_TP, SELECTWISHITEM_TP } from '../types';

export const ADDITEMWISHLIST = (item) => ({ type: ADDITEMWISHLIST_TP, item });
export const DELITEMWISHLIST = (item) => ({ type: DELITEMWISHLIST_TP, item });
