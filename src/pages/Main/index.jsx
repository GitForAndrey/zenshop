import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import {
  OPENMODAL,
  CLOSEMODAL,
  SIGNUP,
  CHANGEFORM,
  LOGIN,
  LOGOUT,
} from '../../Redux/Actions/authorization';
import { GETDATA } from '../../Redux/Actions/getData';
import { ADDITEM } from '../../Redux/Actions/basket';
import { SELECTED } from '../../Redux/Actions/cards';
import { ADDITEMWISHLIST, DELITEMWISHLIST } from '../../Redux/Actions/wishList';
import ItemsContainer from '../../components/ItemsContainer';

import HeaderContainer from '../../components/HeaderContainer';
import ModalLog from '../../components/Modal';
import AlertBlock from '../../components/Alert';

const { Footer, Content, Header } = Layout;

const Main = ({
  data,
  OPENMODAL,
  CLOSEMODAL,
  GETDATA,
  SIGNUP,
  LOGIN,
  LOGOUT,
  CHANGEFORM,
  SELECTED,
  ADDITEMWISHLIST,
  DELITEMWISHLIST,
  ADDITEM,
  modalShow,
  login,
  loading,
  alert,
  alertForm,
  button,
  whatForm,
  user,
  wishlist,
  basketItem,
}) => {
  useEffect(() => {
    GETDATA();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <HeaderContainer
          OPENMODAL={OPENMODAL}
          LOGOUT={LOGOUT}
          login={login}
          user={user}
          selectedKeys="1"
          wishlist={wishlist}
          basketItem={basketItem}
        />
      </Header>

      <Content>
        {alert && <AlertBlock alert={alert} />}
        <ItemsContainer
          data={data}
          loading={loading}
          wishlist={wishlist}
          SELECTED={SELECTED}
          ADDITEMWISHLIST={ADDITEMWISHLIST}
          DELITEMWISHLIST={DELITEMWISHLIST}
          ADDITEM={ADDITEM}
          basketItem={basketItem}
        />
        <ModalLog
          modalShow={modalShow}
          button={button}
          whatForm={whatForm}
          alertForm={alertForm}
          CHANGEFORM={CHANGEFORM}
          CLOSEMODAL={CLOSEMODAL}
          LOGIN={LOGIN}
          LOGOUT={LOGOUT}
          SIGNUP={SIGNUP}></ModalLog>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
const mapStateToProps = (store) => {
  return {
    login: store.login.login,
    data: store.products.products,
    modalShow: store.login.showModal,
    loading: store.products.loading,
    alert: store.products.alert,
    alertForm: store.login.alertForm,
    button: store.login.button,
    firebase: store.firebaseReducer,
    whatForm: store.login.whatForm,
    user: store.login.user,
    wishlist: store.wishlist.wishListArr,
    basketItem: store.basketItem.basketItem,
  };
};

export default connect(mapStateToProps, {
  OPENMODAL,
  CLOSEMODAL,
  GETDATA,
  SIGNUP,
  CHANGEFORM,
  LOGIN,
  LOGOUT,
  ADDITEMWISHLIST,
  DELITEMWISHLIST,
  SELECTED,
  ADDITEM,
})(Main);
