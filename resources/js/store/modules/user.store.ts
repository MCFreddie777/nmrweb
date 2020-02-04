import methods from "../../methods";

import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import {SortOptions} from "./table.store";

@Module({
    namespaced: true,
})
export default class UserStore extends VuexModule {
    private users: User[] = [];
    private filtered: User[] = [];

    get getUsers(): User[] {
        return this.filtered;
    }

    @Mutation
    SET_FILTERED_USERS(users: User[]) {
        this.filtered = users;
    }

    @Mutation
    SET_USERS(users: User[]) {
        this.users = users;
        this.filtered = users;
    }

    @Mutation
    UPDATE_USER(user: User) {
        this.users = this.users.map(u => (u.id === user.id) ? user : u);
    }

    @Action({rawError: true})
    sort(sort: SortOptions) {

        // set sort options
        this.context.commit('TableStore/SET_SORT', sort, {root: true});

        // merge users and filtered users
        const filteredKeys = new Set(this.filtered.map((u: User) => u.id));
        this.context.commit('SET_FILTERED_USERS', (methods.sort(this.users.filter((u: User) => filteredKeys.has(u.id)), sort.key, sort.order)));
    }

    @Action({rawError: true})
    filter(filter: string) {
        this.context.commit('SET_FILTERED_USERS',
            this.users.filter((u: User) => u.login.includes(filter))
        );
        this.context.dispatch('sort', this.context.rootGetters['TableStore/getSort']);
    }

    @Action({rawError: true})
    updateUser(user: User): void {
        this.UPDATE_USER(user);
    }

    @Action({rawError: true})
    fetch(): Promise<void> {
        return new Promise(resolve => {
            window.axios.get('api/users')
                .then(response => {
                    this.context.commit('TableStore/SET_SORT', {key: 'id', order: 'DESC'}, {root: true});
                    this.context.commit('SET_USERS', response.data.users);
                    resolve();
                })
                .catch(e => {
                    this.context.commit('AlertStore/setAlert',
                        {
                            type: 'error',
                            message: (e.response && e.response.data && e.response.data.message) ? e.response.data.message : undefined,
                        },
                        {root: true}
                    );
                });
        });
    }
}

export interface User {
    id: number,
    login: string,
    role: string,
}
