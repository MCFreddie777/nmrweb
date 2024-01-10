import methods from "../../methods";

import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import {SortOptions} from "./table.store";

@Module({namespaced: true})
export default class SampleStore extends VuexModule {
    public samples: Sample[] = [];
    public filtered: Sample[] = [];

    get getSamples() {
        return this.filtered;
    }

    @Mutation
    public SET_FILTERED_SAMPLES(samples: Sample[]) {
        this.filtered = samples;
    };

    @Mutation
    public SET_SAMPLES(samples: Sample[]) {
        this.filtered = samples;
        this.samples = samples;
    };

    @Mutation
    private UPDATE_SAMPLE(sample: Sample) {
        this.samples = this.samples.map(_sample => (_sample.id === sample.id) ? sample : _sample);
    }

    @Action
    public sort({key, order}: SortOptions) {
        // set sort options
        this.context.commit('TableStore/SET_SORT', {key, order}, {root: true});
        // merge samples and filtered samples
        const filteredKeys = new Set(this.filtered.map(u => u.id));
        this.context.commit('SET_FILTERED_SAMPLES',
            methods.sort(this.samples.filter((s: Sample) => filteredKeys.has(s.id)), key, order)
        );
    }

    @Action
    public filter(filter: string) {
        this.context.commit(
            'SET_FILTERED_SAMPLES',
            this.samples.filter((s: Sample) => s.name.includes(filter) || s.user.login.includes(filter) || s.id.toString().includes(filter))
        );
        this.context.dispatch('sort', this.context.rootGetters['TableStore/getSort']);
    }

    @Action({rawError: true})
    public fetchSamples(): Promise<void> {
        return window.axios.get('api/samples')
            .then(res => {
                this.context.commit('TableStore/SET_SORT', {key: 'id', order: 'DESC'}, {root: true});
                this.context.commit('SET_SAMPLES', res.data.samples);
            })
            .catch(e => {
                this.context.dispatch(
                    'AlertStore/setAlert',
                    {
                        type: 'error',
                        message: (e.response && e.response.data && e.response.data.message) ? e.response.data.message : undefined,
                    },
                    {root: true}
                );
                throw new Error('Fetching samples failed.');
            });
    }

    @Action
    public updateSample(sample: Sample) {
        this.UPDATE_SAMPLE(sample)
    }
}

export interface Sample {
    id: number,
    name: string,
    user: {
        login: string;
    }
    structure: string,
}
