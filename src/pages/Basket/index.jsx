import React, {useState, useEffect} from 'react'
import { List, Layout, Menu, Row, Col } from 'antd';
import {
    Link
  } from "react-router-dom";
  import BasketItem from '../../components/BasketItem'

const { Header, Footer, Content } = Layout;


const data = [
  {
    id:1,
    price: 5400,
    quantity:1,
    name: "Квадракоптер GS-3",
    image:"http://i.piccy.info/i9/e7dd4e7234f090d699d4c622df8decf8/1593116024/69030/1385260/oc_93product_Kvadrokopter_DJI_Mavic_2_Pro_283da55c4daf24bd2a167cc4eac27f71_1000x1000.jpg"
  },
  {
    id:2,
    price: 600,
    quantity:2,
    name: "Наушники R2-pro",
    image:"http://i.piccy.info/i9/4e22360dac10861a9a87382a00d01f57/1593116089/42728/1385260/besprovodnye_naushniki_xiaomi_redmi_airdots_zbw4480gl_17941920765049.jpg"
  
  },
  {
    id:3,
    price: 4000000,
    quantity:1,
    name: "Вертолет SP-roket 23G5",
    image:"http://i.piccy.info/i9/e122931d8888c84206b7c43ee77c2594/1593116171/42111/1385260/unnamed.jpg"
  
  }
    
  ];
  

const Basket = () => {
  const [allCost, changeCost] = useState(0);
  const [dataArray, chengeData] = useState(data);

  useEffect(() => {
    let sum = 0;
      for (const item of data) {
        sum += item.price*item.quantity;
        }
    changeCost(sum);
}, []);

    const calculateCost = (arr) =>{
        let sum = 0;
        for (const item of arr){
          sum += item.price*item.quantity;
        }
        changeCost(sum)
    }
    const deleteItem = ({item}) => {
      
      console.log(item)
      let itemIndex = dataArray.indexOf(item);
      console.log(itemIndex, dataArray)
      dataArray.splice(itemIndex, 1);
      chengeData((dataArray)=> {
        return dataArray
      });
      
      calculateCost(dataArray);
    }
    const onChangeQuantiti = (quantity,item) => {
      let changeArr = dataArray.slice();
      let findItem =  changeArr.find( (el) => el.id === item.id);
      let itemIndex = changeArr.indexOf(findItem);
      let newItem = {...item, quantity:quantity};
      changeArr.splice(itemIndex, 1, newItem);
      chengeData((dataArray)=> {
        return changeArr
      });
      calculateCost(changeArr);
      
      
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
            dataSource={dataArray}
            renderItem={item => <List.Item><BasketItem item={item} onChangeQuantiti={onChangeQuantiti} ondeleteItem={deleteItem}/></List.Item>}
            />
        </Col>
      </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
       
    )
}

export default Basket;
