import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import styles from './Login.module.css';
const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className={styles.Login}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item>
        <Title className="title" level={3}>
         Login
        </Title>
      </Form.Item>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
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
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default Login;
