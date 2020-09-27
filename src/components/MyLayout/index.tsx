import React from 'react';
import {connect} from 'react-redux';
import {Layout, Input, Avatar, Menu, Dropdown} from 'antd';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import MyMenu from './Menu';

import styles from './index.module.scss';

const {Header, Sider, Content} = Layout;
const {Search} = Input;
const {Item} = Menu;


@connect(({user}: any) => ({user}))
export default class MyLayout extends React.Component<any, any> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onMenuClick = (e: any) => {
    if (e.key === 'loginOut') {
      this.loginOut()
    }
  };

  loginOut = () => {
    console.log(this.props);
    window.location.replace('/#/login')
  };


  render() {
    const {collapsed} = this.state;
    const {children, user} = this.props;
    console.log('user', user)
    return (
      <Layout>
        <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo}/>
          <MyMenu/>
        </Sider>
        <Layout className={styles['site-layout']} style={{paddingLeft: collapsed ? '81px' : '203px'}}>
          <Header className={styles['site-layout-header']} style={{left: collapsed ? '81px' : '203px', padding: 0}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: this.toggle,
            })}
            <div className={styles.headerContent}>
              <Search
                size='small'
                placeholder="input search text"
                onSearch={(value: string) => console.log(value)}
                style={{width: 200}}
              />
              <Dropdown overlay={
                <Menu onClick={this.onMenuClick}>
                  <Item key='loginOut'>
                    <ExportOutlined/>
                    退出
                  </Item>
                </Menu>
              }>
                <div className={styles.user}>
                  {user.user_info?.user_name || 'Admin'}
                  <Avatar className={styles.avatar} size='small' icon={<UserOutlined/>}/>
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content
            className={styles['layout-content']}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}