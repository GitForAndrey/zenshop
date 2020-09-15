import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DELETE_ITEM, QUANTITY_ITEM } from '../../Redux/Actions/basket';
import { OPENMODAL, LOGOUT } from '../../Redux/Actions/authorization';
import { List, Layout, Row, Col } from 'antd';
import HeaderContainer from '../../components/HeaderContainer';
import BasketItem from '../../components/BasketItem';

const { Header, Footer, Content } = Layout;

const Basket = ({
  wishlist,
  DELETE_ITEM,
  QUANTITY_ITEM,
  login,
  user,
  OPENMODAL,
  LOGOUT,
  basketItem,
}) => {
  const [allCost, changeCost] = useState(0);

  useEffect(() => {
    calculateCost(basketItem);
  }, [basketItem]);

  const calculateCost = (arr) => {
    let sum = 0;
    for (const item of arr) {
      sum += item.price * item.quantity;
    }
    changeCost((allCost) => {
      return sum;
    });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <HeaderContainer
          OPENMODAL={OPENMODAL}
          LOGOUT={LOGOUT}
          login={login}
          user={user}
          selectedKeys={'2'}
          wishlist={wishlist}
          basketItem={basketItem}
        />
      </Header>
      <Content>
        <Row justify="center" align="center">
          <Col span={12}>
            <List
              size="small"
              header={<div>Корзина</div>}
              footer={<div>Общая стоимость: {allCost}</div>}
              bordered
              dataSource={basketItem}
              renderItem={(item) => (
                <List.Item>
                  <BasketItem item={item} QUANTITY_ITEM={QUANTITY_ITEM} DELETE_ITEM={DELETE_ITEM} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
const mapStateToProps = (store) => {
  return {
    login: store.login.login,
    user: store.login.user,
    wishlist: store.wishlist.wishListArr,
    basketItem: store.basketItem.basketItem,
  };
};
export default connect(mapStateToProps, { DELETE_ITEM, QUANTITY_ITEM, OPENMODAL, LOGOUT })(Basket);
