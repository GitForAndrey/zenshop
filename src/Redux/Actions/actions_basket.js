export const DELETE_ITEM = (item) => ({type: 'DELETE_ITEM_BASKET', item});
export const QUANTITY_ITEM = (value, item) => {
            const payload = {value, item};
            return {type: 'QUANTITY_ITEM_BASKET', payload}
    };