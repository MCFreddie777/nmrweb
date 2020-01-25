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
    fetchSamples: ({dispatch,commit}) => {
        return new Promise(resolve => {
            axios.get('/api/samples')
                .then(res => {
                    commit('SET_SAMPLES', res.data.samples);
                    resolve();
                })
                .catch(e => {
                    dispatch(
                        'Alert/setAlert',
                        {
                            type: 'error',
                            message: e.response.data.message
                        },
                        {root: true}
                    );
                });
        })
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
