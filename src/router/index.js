
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from '../components/MainPage';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import UserDash from '../components/UserDash';

const mgaRota = [
    {
        component: MainPage,
        name: "landing",
        path: "/"
    },
    {
        component: About,
        name: "about",
        path: "/about"
    },
    {
        component: Contact,
        name: "contact",
        path: "/contact"
    },
    {
        component: Login,
        name: "login",
        path: "/login"
    },
    {
        component: UserDash,
        name: "dashboard",
        path: "/dashboard"
    }
];

export default new VueRouter({
    mode: 'history',
    routes: mgaRota
});