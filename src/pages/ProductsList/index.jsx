import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { OPENMODAL, CLOSEMODAL, GETDATA } from '../../Redux/actions';
import CardWrapper from '../../components/CardWrapper';
import { Layout } from 'antd';
import HeaderBlock from '../../components/Header';
import ModalLog from '../../components/Modal';
import AlertBlock from '../../components/Alert';

const { Footer, Content } = Layout;

const ProductsList = ({
  data,
  OPENMODAL,
  CLOSEMODAL,
  GETDATA,
  modalShow,
  login,
  loading,
  alert,
}) => {
  useEffect(() => {
    GETDATA();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBlock OPENMODAL={OPENMODAL} login={login} />
      <Content>
        {alert && <AlertBlock alert={alert} />}
        <CardWrapper data={data} loading={loading} />
        <ModalLog modalShow={modalShow} CLOSEMODAL={CLOSEMODAL}></ModalLog>
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
  };
};

export default connect(mapStateToProps, { OPENMODAL, CLOSEMODAL, GETDATA })(ProductsList);
