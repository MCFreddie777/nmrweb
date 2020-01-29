import methods from "../../methods";

const state = {
    users: [],
    filtered: [],
};

const getters = {
    getUsers: (state) => {
        return state.filtered
    },
};

const actions = {
    sort: (context, {key, order}) => {

        // set sort options
        context.commit('Table/SET_SORT', {key, order}, {root: true});

        // merge users and filtered users
        const filteredKeys = new Set(context.state.filtered.map(u => u.id));
        context.commit(
            'SET_FILTERED_USERS',
            methods.sort(
                context.state.users.filter(u => filteredKeys.has(u.id)),
                key,
                order));
    },

    filter: (context, filter) => {
        context.commit(
            'SET_FILTERED_USERS',
            context.state.users.filter(u => u.login.includes(filter))
        );
        context.dispatch('sort', context.rootGetters['Table/getSort']);
    },

    updateUser: (context, user) => {
        context.commit('UPDATE_USER', user)
    },

    fetchUsers: ({dispatch, commit}) => {
        return new Promise(resolve => {
            axios.get('api/users')
                .then(res => {
                    commit('Table/SET_SORT', {key: 'id', order: 'DESC'}, {root: true});
                    commit('SET_USERS', res.data.users);
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
        });
    }
};

const mutations = {
        SET_FILTERED_USERS(state, users) {
            state.filtered = users;
        },

        SET_USERS(state, users) {
            state.users = users;
            state.filtered = state.users;
        },

        UPDATE_USER(state, user) {
            state.users = state.users.map(_user => (_user.id === user.id) ? user : _user);
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
