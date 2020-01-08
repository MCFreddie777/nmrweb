import router from '../../router'

const state = {
    user: {},
    isLogged: false,
    csrf: '',
};


const getters = {
    csrf: (state) => {
        return state.csrf;
    },
};

const actions = {
    logIn: (context) => {
        context.commit('LOGIN');
        router.push('/');
    },

    logOut: (context) => {
        context.commit('LOGOUT');
        router.push('/login');
    },
};

const mutations = {
    LOGOUT(state) {
        state.user = {};
        state.isLogged = false;
    },

    LOGIN(state) {
        // state.user
        state.isLogged = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
