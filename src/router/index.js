
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from '../components/MainPage';
import About from '../components/About';
import Contact from '../components/Contact';

const mgaRota = [
    {
        component: MainPage,
        name: "landing",
        path: "/landing"
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
    }
];

export default new VueRouter({
    routes: mgaRota
});