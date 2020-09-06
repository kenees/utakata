import React from 'react';
import {Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import history from '@/router/history'
import router from '@/router';

const { Item } = Menu;

interface IProps {

}

interface IState {
  selectedKeys: string[],
}

export default class MyMenu extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedKeys: [],
    }
  }

  componentDidMount() {
    this.setState({
      selectedKeys: [history.location.hash.substr(1)]
    })
    history.listen((history:any) =>{
      this.setState({
        selectedKeys: [history.location.hash.substr(1)]
      })
    })
  }

  render() {
    const { selectedKeys } = this.state;
    console.log('selectedKeys', selectedKeys);
    return <Menu
              theme='dark'
              mode='inline'
              selectedKeys={selectedKeys}
    >
      {
        router.map((item, idx) => {
          if (typeof item.menu !== 'boolean') {
            return <Item key={item.path}
                              icon={React.createElement(item.menu.icon)}
            >
              <Link to={{
                pathname: item.path,
                }}
              >
                { item.menu.title }
              </Link>
            </Item>
          }
        })
      }
    </Menu>
  }
}