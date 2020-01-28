import methods from "../../methods";

const state = {
    samples: [],
    filtered: [],
};


const getters = {
    getSamples: (state) => {
        return state.filtered
    },
};

const actions = {
    sort: (context, {key, order}) => {

        // set sort options
        context.commit('Table/SET_SORT', {key, order}, {root: true});

        // merge samples and filtered samples
        const filteredKeys = new Set(context.state.filtered.map(u => u.id));
        context.commit(
            'SET_FILTERED_SAMPLES',
            methods.sort(
                context.state.samples.filter(u => filteredKeys.has(u.id)),
                key,
                order));
    },

    filter: (context, filter) => {
        context.commit(
            'SET_FILTERED_SAMPLES',
            context.state.samples.filter(s => s.name.includes(filter) || s.user.login.includes(filter) || s.id.toString().includes(filter))
        );
        context.dispatch('sort', context.rootGetters['Table/getSort']);
    },

    fetchSamples: ({dispatch, commit}) => {
        return new Promise(resolve => {
            axios.get('api/samples')
                .then(res => {
                    commit('Table/SET_SORT', {key: 'id', order: 'DESC'}, {root: true});
                    commit('SET_SAMPLES', res.data.samples);
                    resolve();
                })
                .catch(e => {
                    dispatch(
                        'Alert/setAlert',
                        {
                            type: 'error',
                            message: (e.response && e.response.data && e.response.data.message) ? e.response.data.message : undefined,
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
        SET_FILTERED_SAMPLES(state, samples) {
            state.filtered = samples;
        },

        SET_SAMPLES(state, samples) {
            state.samples = samples;
            state.filtered = state.samples;
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
