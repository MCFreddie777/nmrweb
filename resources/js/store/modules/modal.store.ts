import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'

@Module({
    namespaced: true,
})
export default class ModalStore extends VuexModule {
    private modal: Modal = {
        active: false,
        center: false,
        componentName: undefined,
        componentProps: undefined,
        width: 112
    };

    get getModal(): Modal {
        return this.modal;
    }

    @Mutation
    SET(options: ModalOptions) {
        this.modal = {
            active: true,
            center: options.center !== undefined ? options.center : false,
            closable: options.closable,
            componentName: options.componentName,
            componentProps: options.componentProps,
            width: options.width || 112
        };
    }

    @Mutation
    REMOVE() {
        this.modal = {
            active: false,
            center: true,
            closable: undefined,
            componentName: undefined,
            componentProps: undefined,
            width: 112,
        };
    }

    @Action
    set(options: ModalOptions) {
        this.context.commit('SET', options);
    }

    @Action
    dismiss() {
        this.context.commit('REMOVE');
    }
}

export interface ModalOptions {
    closable?: boolean,
    componentName: string | undefined,
    componentProps: {} | undefined,
    center?: boolean,
    width: number,
}

export interface Modal extends ModalOptions {
    active: boolean,
}
