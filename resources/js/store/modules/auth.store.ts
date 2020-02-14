import router from '../../router'
import {Module, VuexModule, Action, Mutation} from "vuex-module-decorators";
import {User} from "./user.store";
import Vue from "vue";

@Module({
    namespaced: true,
})
export default class AuthStore extends VuexModule {

    private user: LoggedUser = {
        id: 0,
        login: 'admin',
        role: 'admin',
        isLogged: false,
    };

    get getUser(): User | boolean {
        if (this.user.isLogged)
            return {
                id: this.user.id,
                login: this.user.login,
                role: this.user.role,
            };
        else return false;
    }

    @Mutation
    public LOGIN(user: User): boolean {
        try {
            this.user = {
                ...user,
                isLogged: true,
            };
            return true;
        } catch (e) {
            return false;
        }
    }

    @Mutation
    public LOGOUT(): boolean {
        try {
            this.user.isLogged = false;
            return true;
        } catch (e) {
            return false;
        }
    }

    @Action({rawError: true})
    logIn({login, password}: Credentials): Promise<boolean> {

        if (!login || !password) return new Promise((reject) => reject());

        return window.axios.post('/api/login', {
            login, password
        }).then(response => {

            this.context.commit('LOGIN', {
                id: response.data.user.id,
                login: response.data.user.login,
                role: response.data.user.role.name
            });

            router.push('/');
            return true;

        }).catch(error => {
            // Devlog
            if (Vue.prototype.$debug) {
                console.error(error.response ? error.response : error);
            }

            if (error.response) {
                throw new Error('Nesprávne meno alebo heslo');
            } else {
                throw new Error()
            }
        })
    }

    @Action({rawError: true})
    logOut(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                //TODO: request logout
                this.context.commit('LOGOUT');
                router.push('/login');
                resolve(true);
            } catch (e) {
                reject(false);
            }
        })
    }
}

interface LoggedUser extends User {
    isLogged: boolean,
}

export interface Credentials {
    login: string | undefined,
    password: string | undefined
}
