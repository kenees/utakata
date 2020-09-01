import React from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import Menu from './Menu';

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
    const { collapsed } = this.state;
    return (
    <Layout >
      <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu />
      </Sider>
      <Layout className={styles['site-layout']} style={{paddingLeft: collapsed ? '81px' : '203px'}}>
          <Header className={styles['site-layout-header']} style={{ left: collapsed ? '81px' : '203px', padding: 0}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className={styles['layout-content']}
            style={{
              margin: '24px 16px',
            }}
          >
ssss
          </Content>
      </Layout>
    </Layout>
    );
  }
}