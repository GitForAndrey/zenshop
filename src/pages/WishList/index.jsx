import React from 'react';
import { connect } from 'react-redux';
import { DELITEMWISHLIST } from '../../Redux/Actions/wishList';
import { List, Layout, Row, Col } from 'antd';
import { OPENMODAL, LOGOUT } from '../../Redux/Actions/authorization';
import HeaderContainer from '../../components/HeaderContainer';
import WishListItem from '../../components/WishListItem';

const { Header, Footer, Content } = Layout;

const WishList = ({ wishlist, DELITEMWISHLIST, login, user, OPENMODAL, LOGOUT, basketItem }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <HeaderContainer
          OPENMODAL={OPENMODAL}
          LOGOUT={LOGOUT}
          login={login}
          user={user}
          selectedKeys={'3'}
          wishlist={wishlist}
          basketItem={basketItem}
        />
      </Header>
      <Content>
        <Row justify="center" align="center">
          <Col span={12}>
            <List
              size="small"
              header={<div>Лист желаний</div>}
              bordered
              dataSource={wishlist}
              renderItem={(item) => (
                <List.Item>
                  <WishListItem item={item} DELITEMWISHLIST={DELITEMWISHLIST} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
      <Content></Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
const mapStateToProps = (store) => {
  return {
    wishlist: store.wishlist.wishListArr,
    login: store.login.login,
    user: store.login.user,
    basketItem: store.basketItem.basketItem,
  };
};
export default connect(mapStateToProps, { DELITEMWISHLIST, OPENMODAL, LOGOUT })(WishList);
