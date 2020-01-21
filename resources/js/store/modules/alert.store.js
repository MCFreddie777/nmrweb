const state = {
    alert: {
        active: true,
        type: undefined,
        message: undefined,
    }
};

const getters = {
    alert: (state) => {
        return state.alert;
    },
};

const actions = {
    setAlert: (context, alertOptions) => {
        context.commit('SET', alertOptions);
    },

    dismiss: (context) => {
        context.commit('REMOVE');
    }
};

const mutations = {
    SET(state, options) {
        state.alert = {
            active: true,
            type: options.type,
            message: options.message,
        };
    },
    REMOVE(state) {
        state.alert = {
            active: false,
            type: undefined,
            message: undefined,
        };
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
