import { DELETE_ITEM_TP, QUANTITY_ITEM_TP, ADDITEM_TP } from '../types';

const initialState = {
  basketItem: [],
};

const basketItem = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM_TP:
      const itemId = action.item.item.id;
      return { ...state, basketItem: state.basketItem.filter((item) => item.id !== itemId) };
    case ADDITEM_TP:
      const additem = action.item;
      const arr = state.basketItem;

      let found = arr.some(function (el) {
        return el.id === additem.id;
      });

      if (found) {
        return { ...state, basketItem: [...state.basketItem] };
      } else {
        return { ...state, basketItem: [...state.basketItem, additem] };
      }

      return { ...state, basketItem: [...state.basketItem, action.item] };
    case QUANTITY_ITEM_TP:
      const { item, value } = action.payload;
      return {
        ...state,
        basketItem: state.basketItem.map((item1) => {
          if (item1.id === item.id) {
            return {
              ...item,
              quantity: value,
            };
          }
          return item1;
        }),
      };

    default:
      return state;
  }
};
export default basketItem;
