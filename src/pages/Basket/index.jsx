import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../Redux/Actions/actions_basket';
import { List, Layout, Menu, Row, Col } from 'antd';
import {
    Link
  } from "react-router-dom";
import BasketItem from '../../components/BasketItem';


const { Header, Footer, Content } = Layout;

const Basket = ({data, DELETE_ITEM, QUANTITY_ITEM}) => {
  
  const [allCost, changeCost] = useState(0);
  

useEffect(() => {
  calculateCost(data);
}, [data]);

const calculateCost = (arr) =>{
    let sum = 0;
    for (const item of arr){
      sum += item.price*item.quantity;
    }
    changeCost((allCost)=> {
      return sum
    });
}
  
    return (
      
        <Layout style={{minHeight:'100vh'}}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
            <Menu.Item key="1"><Link to='/'>Главная</Link></Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3"><Link to='/basket'>Корзина</Link></Menu.Item>
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
              renderItem={item =>
                <List.Item>
                    <BasketItem 
                    item={item}
                    quantityItem={QUANTITY_ITEM} 
                    deleteItem={DELETE_ITEM}/>
                </List.Item>}
          />
        </Col>
      </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
       
    )
}
const mapStateToProps = (store) => {
  return{
    data: store.basketItem.basketItem,
  }
};
  const mapDispatchToProps = (dispatch) => {
    const {DELETE_ITEM, QUANTITY_ITEM} = bindActionCreators(actions, dispatch);
  return{
    DELETE_ITEM,
    QUANTITY_ITEM,
  }
};
export default connect(mapStateToProps,mapDispatchToProps )(Basket);
