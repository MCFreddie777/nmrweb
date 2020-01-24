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
    }
;


const getters = {
    isNavigationCollapsed: (state) => {
        return state.navigation.collapsed;
    },

    navigationItems: (state) => {
        return state.navigation.items;
    },
};

const actions = {
    toggleNavigation: (context) => {
        context.commit('TOGGLE_NAVIGATION');
    },
};

const mutations = {
    TOGGLE_NAVIGATION(state) {
        state.navigation.collapsed = !state.navigation.collapsed
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
