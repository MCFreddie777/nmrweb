const state = {
    modal: {
        active: true,
        closable: undefined,
        componentName: undefined,
        componentProps: undefined,
        center: true,
        width: 112,
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
            center: options.center !== undefined ? options.center : 'fuck',
            closable: options.closable,
            componentName: options.componentName,
            componentProps: options.componentProps,
            width: options.width || 112
        };
    },

    REMOVE(state) {
        state.modal = {
            active: false,
            center: true,
            closable: undefined,
            componentName: undefined,
            componentProps: undefined,
            width: 112,
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
