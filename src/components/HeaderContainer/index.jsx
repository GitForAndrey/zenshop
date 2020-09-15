import React from 'react';
import { Menu, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ExclamationOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Header_left, Greeting, Icons } from './style';

const HeaderContainer = ({
  OPENMODAL,
  login,
  LOGOUT,
  user,
  selectedKeys,
  wishlist = 0,
  basketItem = 0,
}) => {
  const firstHeader = (
    <Row justify="space-between" align="middle">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedKeys]}>
        <Menu.Item key="1">
          <Link to="/">Главная</Link>
        </Menu.Item>
      </Menu>
      <Button ghost onClick={() => OPENMODAL()}>
        Войти
      </Button>
    </Row>
  );
  const secondHeader = (
    <Row justify="space-between" align="middle">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedKeys]}>
        <Menu.Item key="1">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/basket">Корзина</Link>
          {basketItem.length ? (
            <Icons>
              <ShoppingCartOutlined />
            </Icons>
          ) : null}
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/wishlist">Мои желания</Link>
          {wishlist.length ? (
            <Icons>
              <ExclamationOutlined />
            </Icons>
          ) : null}
        </Menu.Item>
      </Menu>
      <Header_left>
        <Greeting>Добро пожаловать, {user.displayName}!</Greeting>
        <Button ghost onClick={() => LOGOUT()}>
          Выйти
        </Button>
      </Header_left>
    </Row>
  );

  return login ? secondHeader : firstHeader;
};
export default HeaderContainer;
