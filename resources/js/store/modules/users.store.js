const state = {
        users: [],
    }
;


const getters = {
    getUsers: (state) => {
        return state.users
    },
};

const actions = {
    updateUser: (context, user) => {
        context.commit('UPDATE_USER', user)
    },

    fetchUsers: ({dispatch, commit}) => {
        return new Promise(resolve => {
            axios.get('api/users')
                .then(res => {
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
        SET_USERS(state, users) {
            state.users = users;
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
