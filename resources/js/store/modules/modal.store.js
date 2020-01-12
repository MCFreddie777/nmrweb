const state = {
    modal: {
        active: true,
        closable: undefined,
        componentName: undefined,
        componentProps: undefined
    }
};

const getters = {
    modal: (state) => {
        return state.modal;
    },
};

const actions = {
    setModal: (context, modalOptions) => {
        context.commit('SET', modalOptions);
    },

    dismiss: (context) => {
        context.commit('REMOVE');
    }
};

const mutations = {
    SET(state, options) {
        state.modal = {
            active: true,
            closable: options.closable,
            componentName: options.componentName,
            componentProps: options.componentProps,
        };
    },
    REMOVE(state) {
        state.modal = {
            active: false,
            closable: undefined,
            componentName: undefined,
            componentProps: undefined,
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
