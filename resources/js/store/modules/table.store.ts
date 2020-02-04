import {VuexModule, Module, Mutation} from 'vuex-module-decorators'

@Module({namespaced: true})
export default class TableStore extends VuexModule {
    public sort: SortOptions = {key: 'id', order: 'DESC'};

    get getSort(): SortOptions {
        return this.sort;
    }

    @Mutation
    public SET_SORT(options: SortOptions) {
        this.sort = options;
    };
}

export interface SortOptions {
    key: string;
    order: 'DESC' | 'ASC';
}

export interface TableOptions<T> {
    data: {
        items: T[]
        loading: boolean,
        empty: string,
        onClick: Function,
        sort: Function
    },
    header: {
        items: any
    },
    layout: {}
}
