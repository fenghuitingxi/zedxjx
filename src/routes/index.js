import Home from './../components/Home';
import NotFound from './../components/NotFound';
import Children from './children';
import Login from './../pages/login';
import HomePage from './../pages/homePage';
// import TemplatePage from './../pages/templatePage';
// import Abstract from './../components/Abstract';

const routes = [
    {
        path: '/',
        component: Home,
        children: Children,
        redirect: 'access/home'
    },
    {
        path: '/access',
        component: Home,
        children: [
            {
                name: '首页',
                path: 'home',
                component: HomePage
            }, {
                path: '404',
                name: '404',
                component: NotFound
            }, {
                path: 'login',
                name: '登录',
                component: Login
            }
        ]
    }, {
        path: '*',
        redirect: '/'
    }
];
export default routes;