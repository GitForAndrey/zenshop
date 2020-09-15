import React from 'react';
import { Form, Input, Tooltip, Checkbox, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import AlertInForm from '../AlertInForm';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = ({ CHANGEFORM, SIGNUP, alertForm, button }) => {
  const [form] = Form.useForm();

  const onFinish = ({ email, password, nickname }) => {
    console.log('Received values of form:', email, password);
    SIGNUP(email, password, nickname);
  };

  return (
    <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError>
      {alertForm && <AlertInForm alertForm={alertForm} />}
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label={
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}>
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={button}>
          Register
        </Button>
        или <a onClick={() => CHANGEFORM()}>Уже есть аккаунт!</a>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
