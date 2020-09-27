import React from 'react';
import { Form, Input, Button, message } from 'antd';
import api from '@/api';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './LoginForm.module.scss'

const NormalLoginForm = (props: any) => {
  const onFinish = (values:any) => {
    console.log('Received values of form: ', values);
    api.login(values)
      .then((res:any) => {
        console.log('Login Success', res);
        if (res.success) {
          props.history.push('/home')
        } else {
          message.warning(res.remark)
        }
      })
      .catch((e: any) => {
        message.error(e.describe)
      })
  };

  return (
    <Form
      name="normal_login"
      className={styles['login-form']}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="user_name"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;