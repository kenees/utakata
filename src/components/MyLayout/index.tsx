import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import styles from './index.module.scss';

const { Header, Sider, Content } = Layout;

export default class MyLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className={styles.logo} />
        <Menu theme='dark' mode='inline' defaultSelectedkeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={styles['site-layout']}>
          <Header className={styles['site-layout-background']} style={{ padding: 0}}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className={styles['layout-content']}
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
ssss
          </Content>
      </Layout>
    </Layout>
    );
  }
}