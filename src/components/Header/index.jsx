import React from 'react';
import { Layout, Menu, Row, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderBlock = ({ OPENMODAL, login }) => {
  const firstHeader = (
    <Row justify="space-between" align="middle">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/basket">Главная</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/basket">Корзина</Link>
        </Menu.Item>
      </Menu>
      <Button ghost onClick={() => OPENMODAL()}>
        Войти
      </Button>
    </Row>
  );
  const secondHeader = (
    <Row justify="space-between" align="middle">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/basket">Главная</Link>
        </Menu.Item>
      </Menu>
      <div>Добро пожаловать, Друг!</div>
    </Row>
  );

  return <Header>{false ? secondHeader : firstHeader}</Header>;
};
export default HeaderBlock;
