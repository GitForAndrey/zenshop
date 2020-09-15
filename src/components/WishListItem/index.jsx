import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { Title, Img, ItemContainer } from './style';

const WishListItem = ({ item, DELITEMWISHLIST }) => {
  return (
    <ItemContainer>
      <Img src={item.url} alt="some" />
      <Title>{item.title}</Title>
      <Tooltip title="delete">
        <HeartFilled
          onClick={() => {
            DELITEMWISHLIST(item);
          }}
        />
      </Tooltip>
    </ItemContainer>
  );
};

export default WishListItem;
