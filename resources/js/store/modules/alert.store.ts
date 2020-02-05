import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'

@Module({
    namespaced: true,
})
export default class AlertStore extends VuexModule {

    private alert: AlertObject = {
        active: false,
        type: undefined,
        message: undefined,
    };

    get getAlert(): AlertObject {
        return this.alert;
    }

    @Mutation
    public SET(options: AlertOptions): void {
        this.alert = {
            active: true,
            ...options
        };
    };

    @Mutation
    public REMOVE(): void {
        this.alert = {
            active: false,
            type: undefined,
            message: undefined,
        };
    }

    @Action({commit: 'SET'})
    public setAlert(options: AlertOptions) {
        return options;
    };

    @Action
    public dismiss(): void {
        this.context.commit('REMOVE');
    }
}

interface AlertObject extends AlertOptions {
    active: Boolean,
}

export interface AlertOptions {
    type: 'success' | 'error' | undefined,
    message: string | undefined,
}
