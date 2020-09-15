import { ADDITEMWISHLIST_TP, DELITEMWISHLIST_TP } from '../types';

const initialState = {
  wishListArr: [],
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEMWISHLIST_TP:
      const wishitem = action.item;
      const arr = state.wishListArr;

      let found = arr.some(function (el) {
        return el.id === wishitem.id;
      });

      if (found) {
        return { ...state, wishListArr: [...state.wishListArr] };
      } else {
        return { ...state, wishListArr: [...state.wishListArr, wishitem] };
      }

    case DELITEMWISHLIST_TP:
      const wishitemid = action.item.id;
      return { ...state, wishListArr: state.wishListArr.filter((item) => item.id !== wishitemid) };

    default:
      return state;
  }
};
export default wishlist;
