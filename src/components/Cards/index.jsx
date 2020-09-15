import React, { useState } from 'react';

import { Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;

function Cards({
  item,
  SELECTED,
  ADDITEMWISHLIST,
  DELITEMWISHLIST,
  wish,
  ADDITEM,
  inBasket = false,
}) {
  const [value, setFlipSide] = useState(false);
  const [wishSet, setWishList] = useState(wish);
  const [basketSet, setInBasket] = useState(inBasket);

  const onClickFlip = () => {
    setFlipSide(!value);
  };
  const onClickAddWish = () => {
    ADDITEMWISHLIST(item);
    setWishList(!wishSet);
  };
  const onClickDelWish = () => {
    DELITEMWISHLIST(item);
    setWishList(!wishSet);
  };
  const onClickAdd = () => {
    ADDITEM(item);
    setInBasket(!basketSet);
  };
  return (
    <Col className="gutter-row" span={6}>
      <ReactCardFlip isFlipped={value} flipDirection="horizontal">
        <Card
          hoverable
          cover={
            <img alt="example" src={item.url} style={{ height: 200 }} onClick={onClickFlip} />
          }>
          <Link to="/details">
            <Meta
              title={item.title}
              description="some"
              onClick={() => {
                SELECTED(item);
              }}
            />
          </Link>
          {wishSet ? (
            <HeartFilled onClick={() => onClickDelWish(item)} />
          ) : (
            <HeartOutlined onClick={() => onClickAddWish(item)} />
          )}
          {basketSet ? (
            <Button type="primary" disabled={true}>
              Добавлено!
            </Button>
          ) : (
            <Button type="primary" onClick={() => onClickAdd(item)}>
              В корзину!
            </Button>
          )}
        </Card>

        <Card
          hoverable
          cover={<img alt="example" src={item.thumbnailUrl} style={{ height: 200 }} />}
          onClick={onClickFlip}>
          <Meta title="This is the back of the card" description="some" />
        </Card>
      </ReactCardFlip>
    </Col>
  );
}

export default Cards;
