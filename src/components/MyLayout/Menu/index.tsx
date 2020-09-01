import React from 'react';
import { Menu } from 'antd';
import Icon, {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import router from '@/router';


export default class MyMenu extends React.Component<{}, {}> {
  render() {
    return <Menu theme='dark' mode='inline' defaultSelectedkeys={[1]}>
      {
        router.map((item, idx) => {
          if (item.menu) {
            return <Menu.Item key={item.path}
              icon={<UserOutlined />}
            >
              <Link to={item.path}>
                {item.menu.title}
              </Link>
            </Menu.Item>
          }
        })
      }
    </Menu>
  }
}