import Home from '@/pages/Home';
import Login from '@/pages/Login';

import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    TagOutlined,
    MessageOutlined,
    HomeOutlined,
  } from '@ant-design/icons';

interface IRouter {
    path: string,
    component?: any,
    exact?: boolean,
    routes?: Array<IRouter>,
    requiresAuth?: boolean,
    menu:boolean | {
        title: string,
        icon: any,
    }
}

const Router: IRouter[] = [
    {
        path: '/',
        exact: true,
        component: Home,
        requiresAuth: false,
        menu: {
            title: '首页',
            icon: HomeOutlined,
        }
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        requiresAuth: false,
        menu: false,
    },
    {
        path: '/article',
        exact: true,
        component: Login,
        requiresAuth:false,
        menu: {
            title: '文章管理',
            icon: HomeOutlined,
        }
    },
    {
        path: '/tags',
        exact: true,
        component: Home,
        requiresAuth:false,
        menu: {
            title: '标签管理',
            icon: TagOutlined,
        }
    },
    {
        path: '/message',
        exact: true,
        component: Home,
        requiresAuth:false,
        menu: {
            title: '互动聊天',
            icon: MessageOutlined,
        }
    },
    {
        path: '/music',
        exact: true,
        component: Home,
        requiresAuth:false,
        menu: {
            title: '音乐管理',
            icon: MessageOutlined,
        }
    },
    {
        path: '/user',
        exact: true,
        component: Home,
        requiresAuth:false,
        menu: {
            title: '个人中心',
            icon: UserOutlined,
        }
    }
];

export default Router;
