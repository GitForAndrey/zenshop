import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import AlertInForm from '../AlertInForm';

const NormalLoginForm = ({ CHANGEFORM, LOGIN, LOGOUT, alertForm }) => {
  const onFinish = ({ useremail, password }) => {
    LOGIN(useremail, password);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      {alertForm && <AlertInForm alertForm={alertForm} />}
      <Form.Item
        name="useremail"
        rules={[{ required: true, message: 'Пожайлуста, введите почтовый ящик!' }]}>
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожайлуста, введите пароль!' }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" onClick={() => LOGOUT()}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Войти
        </Button>
        или <a onClick={() => CHANGEFORM()}>Зарегестрироваться!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
