import React from 'react'
import CardWrapper from '../../components/CardWrapper';
import { Layout, Menu } from 'antd';
import {
  Link
} from "react-router-dom";

const { Header, Footer, Content } = Layout;


const ProductsList = () => {
  const data = [
    {
      id:1,
      name: "Квадракоптер GS-3",
      image:"http://i.piccy.info/i9/e7dd4e7234f090d699d4c622df8decf8/1593116024/69030/1385260/oc_93product_Kvadrokopter_DJI_Mavic_2_Pro_283da55c4daf24bd2a167cc4eac27f71_1000x1000.jpg"
    },
    {
      id:2,
      name: "Наушники R2-pro",
      image:"http://i.piccy.info/i9/4e22360dac10861a9a87382a00d01f57/1593116089/42728/1385260/besprovodnye_naushniki_xiaomi_redmi_airdots_zbw4480gl_17941920765049.jpg"
    
    },
    {
      id:3,
      name: "Вертолет SP-roket 23G5",
      image:"http://i.piccy.info/i9/e122931d8888c84206b7c43ee77c2594/1593116171/42111/1385260/unnamed.jpg"
    
    }
  ]
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
export default ProductsList;
