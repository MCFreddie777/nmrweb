import router from '../../router'
import {Module, VuexModule, Action, Mutation} from "vuex-module-decorators";
import {User} from "./user.store";

@Module({
    namespaced: true,
})
export default class AuthStore extends VuexModule {

    private user: LoggedUser = {
        id: 1,
        login: 'admin',
        role: 'admin',
        csrf: '',
        isLogged: true,
    };

    get csrf(): string {
        return this.user.csrf;
    }

    get getUser(): User {
        return {
            id: this.user.id,
            login: this.user.login,
            role: this.user.role,
        }
    }

    @Mutation
    public LOGOUT(): void {
        this.user.isLogged = false;
    }

    @Mutation
    public LOGIN(): void {
        this.user.isLogged = true;
    }

    @Action({rawError: true})
    logIn(): void {
        this.context.commit('LOGIN');
        router.push('/');
    }

    @Action({rawError: true})
    logOut(): void {
        this.context.commit('LOGOUT')
        router.push('/login');
    }
}

interface LoggedUser extends User {
    isLogged: boolean,
    csrf: string,
}
