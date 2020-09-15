import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Spinner from '../Spin';

import Cards from '../../components/Cards';

function ItemsContainer({
  data,
  loading,
  wishlist,
  SELECTED,
  ADDITEMWISHLIST,
  DELITEMWISHLIST,
  ADDITEM,
  basketItem,
}) {
  const cardRender = (el, wishlist2, basketItem1) => {
    let found = wishlist2.some(function (el1) {
      return el1.id === el.id;
    });
    let found2 = basketItem1.some(function (el2) {
      return el2.id === el.id;
    });
    if (found2 && found) {
      return (
        <Cards
          item={el}
          SELECTED={SELECTED}
          ADDITEMWISHLIST={ADDITEMWISHLIST}
          DELITEMWISHLIST={DELITEMWISHLIST}
          ADDITEM={ADDITEM}
          wish={true}
          inBasket={true}
        />
      );
    } else if (found) {
      return (
        <Cards
          item={el}
          SELECTED={SELECTED}
          ADDITEMWISHLIST={ADDITEMWISHLIST}
          DELITEMWISHLIST={DELITEMWISHLIST}
          ADDITEM={ADDITEM}
          wish={true}
        />
      );
    } else if (found2) {
      return (
        <Cards
          item={el}
          SELECTED={SELECTED}
          ADDITEMWISHLIST={ADDITEMWISHLIST}
          DELITEMWISHLIST={DELITEMWISHLIST}
          ADDITEM={ADDITEM}
          inBasket={true}
        />
      );
    } else {
      return (
        <Cards
          item={el}
          SELECTED={SELECTED}
          ADDITEMWISHLIST={ADDITEMWISHLIST}
          DELITEMWISHLIST={DELITEMWISHLIST}
          ADDITEM={ADDITEM}
        />
      );
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {data.map((item) => cardRender(item, wishlist, basketItem))}
    </Row>
  );
}

export default ItemsContainer;
