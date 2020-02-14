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
    public SET(options: AlertOptions) {
        this.alert = {
            active: true,
            ...options
        };
    };

    @Mutation
    public REMOVE() {
        this.alert = {
            active: false,
            type: undefined,
            message: undefined,
        };
    }

    @Action
    public setAlert(options: AlertOptions) {
        return this.context.commit('SET', options);
    };

    @Action
    public dismiss() {
        return this.context.commit('REMOVE');
    }
}

interface AlertObject extends AlertOptions {
    active: Boolean,
}

export interface AlertOptions {
    type: 'success' | 'error' | undefined,
    message: string | undefined,
}
