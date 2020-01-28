const state = {
    sort: {
        key: 'id',
        order: 'DESC'
    },
};

const actions = {};

const getters = {
    getSort: (state) => {
        return state.sort;
    },
};

const mutations = {
    SET_SORT(state, {key, order}) {
        state.sort = {
            key,
            order
        };
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
