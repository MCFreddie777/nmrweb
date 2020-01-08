const state = {
    user: {},
    csrf: '',
};


const getters = {
    csrf: (state) => {
        return state.csrf;
    },
};

const actions = {
    // fetchVariable1({commit}) {
    //     return new Promise((resolve, reject) => {
    // commit('SET_VARIABLE_1', data);
    // resolve();
    // });
    // },
};

const mutations = {};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
