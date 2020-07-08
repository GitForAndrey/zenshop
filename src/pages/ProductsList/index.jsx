import React from 'react';
import {connect} from 'react-redux';
import CardWrapper from '../../components/CardWrapper';
import { Layout, Menu } from 'antd';
import {
  Link
} from "react-router-dom";

const { Header, Footer, Content } = Layout;


const ProductsList = ({data}) => {
  
  return (
    <Layout style={{minHeight:'100vh'}}>
      <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to='/basket'>Главная</Link></Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3"><Link to='/basket'>Корзина</Link></Menu.Item>
      </Menu>
      </Header>
      <Content >
        <CardWrapper data={data}/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
const mapStateToProps = (store) => {
  return{
    data: store.products.products,
  }
};

export default connect(mapStateToProps)(ProductsList);