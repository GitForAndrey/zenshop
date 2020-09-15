import React from 'react';
import { connect } from 'react-redux';
import { OPENMODAL, LOGOUT } from '../../Redux/Actions/authorization';
import { List, Layout, Row, Col } from 'antd';
import HeaderContainer from '../../components/HeaderContainer';

const { Footer, Content, Header } = Layout;

const ItemPage = ({ item, login, user, OPENMODAL, LOGOUT, wishlist, basketItem }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <HeaderContainer
          OPENMODAL={OPENMODAL}
          LOGOUT={LOGOUT}
          login={login}
          user={user}
          selectedKeys={null}
          wishlist={wishlist}
          basketItem={basketItem}
        />
      </Header>
      <Content>
        <Row justify="center" align="center">
          {item.title}
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
const mapStateToProps = (store) => {
  return {
    item: store.products.selected,
    login: store.login.login,
    user: store.login.user,
    wishlist: store.wishlist.wishListArr,
    basketItem: store.basketItem.basketItem,
  };
};

export default connect(mapStateToProps, { OPENMODAL, LOGOUT })(ItemPage);
