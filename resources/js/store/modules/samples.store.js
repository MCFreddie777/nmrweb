const state = {
        samples: [],
    }
;


const getters = {
    getSamples: (state) => {
        return state.samples
    },
};

const actions = {
    setSamples: (context, samples) => {
        context.commit('SET_SAMPLES', samples);
    },

    updateSample: (context, sample) => {
        context.commit('UPDATE_SAMPLE', sample)
    }
};

const mutations = {
        SET_SAMPLES(state, samples) {
            state.samples = samples;
        },

        UPDATE_SAMPLE(state, sample) {
            state.samples = state.samples.map(_sample => (_sample.id === sample.id) ? sample : _sample);
        }
    }
;


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
