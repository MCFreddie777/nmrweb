const state = {
    navigation: {
        collapsed: false, // todo: fetch the setting from the api
        items: [
            {
                title: '',
                items: [
                    {
                        path: '/samples',
                        icon: 'fas fa-lock',
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
    }
};


const getters = {
    isNavigationCollapsed: (state) => {
        return state.navigation.collapsed;
    },

    navigationItems: (state) => {
        return state.navigation.items;
    }
};

const actions = {
    // fetchVariable1({commit}) {
    //     return new Promise((resolve, reject) => {
    // commit('SET_VARIABLE_1', data);
    // resolve();
    // });
    // },
};

const mutations = {
    toggleNavigation(state) {
        // todo: send request preferences
        state.navigation.collapsed = !state.navigation.collapsed
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
