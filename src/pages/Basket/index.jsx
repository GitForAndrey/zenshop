import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DELETE_ITEM, QUANTITY_ITEM } from '../../Redux/actions';
import { List, Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import BasketItem from '../../components/BasketItem';

const { Header, Footer, Content } = Layout;

const Basket = ({ data, DELETE_ITEM, QUANTITY_ITEM }) => {
  const [allCost, changeCost] = useState(0);

  useEffect(() => {
    calculateCost(data);
  }, [data]);

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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/basket">Корзина</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Row justify="center" align="center">
          <Col span={12}>
            <List
              size="small"
              header={<div>Корзина</div>}
              footer={<div>Общая стоимость: {allCost}</div>}
              bordered
              dataSource={data}
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
    data: store.basketItem.basketItem,
  };
};
export default connect(mapStateToProps, { DELETE_ITEM, QUANTITY_ITEM })(Basket);
