import {Module, VuexModule, Action, Mutation} from "vuex-module-decorators";

@Module({
    namespaced: true,
})
export default class AppStore extends VuexModule {
    private navigation: Navigation = {
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
    };

    get isNavigationCollapsed(): boolean {
        return this.navigation.collapsed;
    };

    get navigationItems(): NavigationGroup[] {
        return this.navigation.items;
    };

    @Action
    toggleNavigation() {
        this.context.commit('TOGGLE_NAVIGATION');
    }

    @Mutation
    TOGGLE_NAVIGATION() {
        this.navigation.collapsed = !this.navigation.collapsed
    }
}

export interface Navigation {
    collapsed: boolean,
    items: NavigationGroup[]
}

export interface NavigationGroup {
    title: string;
    items: NavigationItem[];
}

export interface NavigationItem {
    path: string,
    icon: string,
    title: string
}
