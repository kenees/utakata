import Home from '@/pages/Home';
import Login from '@/pages/Login';
import User from '@/pages/User';
import Article from '@/pages/Article';
import Message from '@/pages/Message';
import Music from '@/pages/Music';
import Tags from '@/pages/Tags';
import Forbidden from '@/components/Forbidden';
import NotFound from '@/components/NotFound';
import ServerError from '@/components/ServerError';

import {
    UserOutlined,
    VideoCameraOutlined,
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
        path: '/home',
        exact: true,
        component: Home,
        requiresAuth: false,
        menu: {
            title: '首页',
            icon: HomeOutlined,
        }
    },
    {
        path: '/article',
        exact: true,
        component: Article,
        requiresAuth:false,
        menu: {
            title: '文章管理',
            icon: HomeOutlined,
        }
    },
    {
        path: '/tags',
        exact: true,
        component: Tags,
        requiresAuth:false,
        menu: {
            title: '标签管理',
            icon: TagOutlined,
        }
    },
    {
        path: '/message',
        exact: true,
        component: Message,
        requiresAuth:false,
        menu: {
            title: '互动聊天',
            icon: MessageOutlined,
        }
    },
    {
        path: '/music',
        exact: true,
        component: Music,
        requiresAuth:false,
        menu: {
            title: '音乐管理',
            icon: VideoCameraOutlined,
        }
    },
    {
        path: '/user',
        exact: true,
        component: User,
        requiresAuth:false,
        menu: {
            title: '个人中心',
            icon: UserOutlined,
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
        path: '/403',
        exact: true,
        component: Forbidden,
        menu: false,
    },
    {
        path: '/404',
        exact: true,
        component: NotFound,
        menu: false,
    },
    {
        path: '/500',
        exact: true,
        component: ServerError,
        menu: false,
    },
    {
        path: '',
        component: NotFound,
        menu: false,
    }
];

export default Router;
