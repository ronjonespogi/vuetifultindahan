import axios from 'axios';

const apiUrl = "http://localhost:8000";

const state = {
    user: {},
    loggedIn: false,
};
const getters = {};

const actions = {
    /* eslint no-unused-vars: ["error", { "args": "none" }] */
    getUser({commit}) {
        axios.get(apiUrl + "/api/user/userinfo")
        .then(res => {
            commit('setUser', res.data);
            commit('setLoggedIn', true);
        })

    },

    loginUser({commit}, user) {
        axios.post(apiUrl + "/api/user/login", {
            username: user.username,
            password: user.password
        })
        .then( res => {
            console.log(res);
            if(res.data.status == 200)
            {
                localStorage.setItem("ronrongwapo", res.data.token);
                localStorage.setItem("hahaha", res.data.user.email);
                window.location.replace('/dashboard');
            }
        })
    },

    logoutUser({commit}) {
        commit('setUser', {});
        commit('setLoggedIn', false);

        localStorage.removeItem("ronrongwapo");
        localStorage.removeItem("hahaha");

        window.location.replace('/');
    }
};

const mutations = {
    setUser(state, data) {
        state.user = data;
    },
    setLoggedIn(state, data) {
        state.loggedIn = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,

}