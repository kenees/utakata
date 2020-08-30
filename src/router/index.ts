import Home from '@/pages/Home';
import Login from '@/pages/Login';

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
        path: '/login',
        exact: true,
        component: Login,
        requiresAuth: false,
    }

];

export default Router;
