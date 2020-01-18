const state = {
        navigation: {
            collapsed: false,
            items: [
                {
                    title: '',
                    items: [
                        {
                            path: '/samples',
                            icon: 'fas fa-vial',
                            title: 'Vzorky'
                        },
                        {
                            path: '/files',
                            icon: 'fas fa-file',
                            title: 'Súbory'
                        }
                    ]
                },
                {
                    title: 'Administrácia',
                    items: [
                        {
                            path: '/users',
                            icon: 'fas fa-user-friends',
                            title: 'Správa užívateľov'
                        }
                    ]
                },
                {
                    title: 'Účet',
                    items: [
                        {
                            path: '/change-password',
                            icon: 'fas fa-lock',
                            title: 'Zmena hesla'
                        },
                    ]
                },
            ]
        },
        users: [],
    }
;


const getters = {
    isNavigationCollapsed: (state) => {
        return state.navigation.collapsed;
    },

    navigationItems: (state) => {
        return state.navigation.items;
    },

    getUsers: (state) => {
        return state.users
    },
};

const actions = {
    toggleNavigation: (context) => {
        context.commit('TOGGLE_NAVIGATION');
    },

    setUsers: (context, users) => {
        context.commit('SET_USERS', users);
    },

    updateUser: (context, user) => {
        context.commit('UPDATE_USER', user)
    }
};

const mutations = {
        TOGGLE_NAVIGATION(state) {
            state.navigation.collapsed = !state.navigation.collapsed
        },

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
