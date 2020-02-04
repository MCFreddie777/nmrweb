<template>
    <div class="bg-white rounded-lg">
        <div class="p-4 pl-6 flex justify-between">
            <h1 class="text-2xl">
                Vzorky
            </h1>
            <div class="flex justify-end">
                <search-bar
                    @valueChange="filterResults"
                    class="shadow-sm border mr-3"
                    :extendable="true"
                />
                <ui-button
                    icon="fas fa-plus"
                    class="primary rounded-full"
                    text="Pridať vzorku"
                    @click="$router.push({path: 'new', append: true })"
                />
            </div>
        </div>

        <ui-table
            :options="options"
        >
            <template #tableItemTemplate="{tableItem}">

                <td
                    class="text-gray-600"
                    :class="$methods.tableRowsClassObject(options,0)"
                >
                    <p>{{ tableItem.id }}</p>
                </td>
                <td
                    v-for="(property,index) in ['name','user.login','created_at']"
                    :class="$methods.tableRowsClassObject(options,index+1)"
                >
                    {{
                    $methods.getNested(tableItem,property)
                    }}
                </td>

            </template>
        </ui-table>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {namespace} from "vuex-class";

    import SearchBar from "../../../components/SearchBar.vue";
    import UiButton from "../../../components/ui/UiButton.vue";
    import UiTable from "../../../components/ui/UiTable.vue";
    import {Sample} from "../../../store/modules/sample.store";
    import {SortOptions, TableOptions} from "../../../store/modules/table.store";
    import {ModalOptions} from "../../../store/modules/modal.store";

    const samples = namespace('SampleStore');
    const modal = namespace('ModalStore');

    @Component({
        components: {
            SearchBar,
            UiButton,
            UiTable,
        },
        head: {
            title(): any {
                return {
                    inner: 'Vzorky'
                }
            },
            script(): any {
                return [
                    {type: 'text/javascript', src: "js/ext/jsme.nocache.js", async: false},
                ]
            }
        }
    })
    export default class SampleListView extends Vue {
        @samples.Action('fetchSamples') fetchSamples!: () => Promise<Sample[]>;
        @samples.Action('sort') sortSamples !: (sort: SortOptions) => void;
        @samples.Action('filter') filterSamples !: (filter: string) => void;
        @modal.Action('set') setModal !: (modalOptions: ModalOptions) => void;
        @samples.Getter('getSamples') samples !: Sample[];

        private loading: boolean = true;

        get options(): TableOptions<Sample> {
            return {
                data: {
                    items: this.samples,
                    onClick: (sample: Sample) => this.openModal(sample),
                    sort: (sort: SortOptions) => this.sortSamples(sort),
                    loading: this.loading,
                    empty: 'Ľutujeme, nenašli sa žiadne vzorky',
                },
                header: {
                    items: [
                        {
                            name: 'id',
                        },
                        {
                            name: 'názov',
                            key: 'name',
                        },
                        {
                            name: 'používateľ',
                            key: 'user.login',
                        }, {
                            name: 'dátum',
                            key: 'created_at',
                        },
                    ],
                },
                layout: {
                    '0': {
                        width: 16,
                    },
                    '1': {
                        width: 96,
                        'width-sm': 64,
                        left: true
                    }
                }
            }
        }

        public filterResults(filter: string) {
            if (this.samples) {
                this.filterSamples(filter);
            }
        }

        private openModal(sample: Sample) {
            this.setModal({
                componentName: 'SampleModal',
                componentProps: {sample},
                width: 144,
                center: true,
            });
        }

        mounted() {
            this.fetchSamples().then(() => {
                this.loading = false;
            })
        };
    }
</script>
