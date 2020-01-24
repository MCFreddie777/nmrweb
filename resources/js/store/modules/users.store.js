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
    setUsers: (context, users) => {
        context.commit('SET_USERS', users);
    },

    updateUser: (context, user) => {
        context.commit('UPDATE_USER', user)
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
