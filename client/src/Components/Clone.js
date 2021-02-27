import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './Home.module.css';
import Image from '../../assets/home-img.jpg';

const { Title } = Typography;

const Home = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div className={styles.Container}>
        <div className="form">
          <Form
            // onSubmit={onSubmit}
            className={styles.Home}
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
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                autoComplete="username"
                type="text"
                name="username"
                // onChange={onChange}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                type="password"
                name="password"
                autoComplete="current-password"
                // onChange={onChange}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Enter Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                // onSubmit={onSubmit}
                name="submit"
                type="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="/register">register now!</a>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.Image}>
          <img src={Image} alt="home"></img>
        </div>
      </div>
    </>
  );
};

export default Home;
