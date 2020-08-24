import { DELETE_ITEM_TP, QUANTITY_ITEM_TP } from '../types';

const initialState = {
  basketItem: [
    {
      id: 1,
      price: 5400,
      quantity: 1,
      name: 'Квадракоптер GS-3',
      image:
        'http://i.piccy.info/i9/e7dd4e7234f090d699d4c622df8decf8/1593116024/69030/1385260/oc_93product_Kvadrokopter_DJI_Mavic_2_Pro_283da55c4daf24bd2a167cc4eac27f71_1000x1000.jpg',
    },
    {
      id: 2,
      price: 600,
      quantity: 2,
      name: 'Наушники R2-pro',
      image:
        'http://i.piccy.info/i9/4e22360dac10861a9a87382a00d01f57/1593116089/42728/1385260/besprovodnye_naushniki_xiaomi_redmi_airdots_zbw4480gl_17941920765049.jpg',
    },
    {
      id: 3,
      price: 4000000,
      quantity: 3,
      name: 'Вертолет SP-roket 23G5',
      image:
        'http://i.piccy.info/i9/e122931d8888c84206b7c43ee77c2594/1593116171/42111/1385260/unnamed.jpg',
    },
  ],
};

const basketItem = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM_TP:
      const itemId = action.item.item.id;
      return { ...state, basketItem: state.basketItem.filter((item) => item.id !== itemId) };

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
