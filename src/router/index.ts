import Home from '@/pages/Home';

interface IRouter {
    path: string,
    component?: any,
    exact?: boolean,
    routes?: Array<IRouter>,
    requiresAuth?: boolean,
}

const Router: IRouter[] = [
    {
        path: '/',
        exact: true,
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/home',
        exact: false,
        component: Home,
        requiresAuth: false,
    }
];

export default Router;
