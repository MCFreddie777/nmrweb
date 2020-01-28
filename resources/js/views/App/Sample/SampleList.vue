<template>
    <div class="bg-white rounded-lg">
        <div class="p-4 pl-6 flex justify-between">
            <h1 class="text-2xl">
                Vzorky
            </h1>
            <div class="flex justify-end">
                <SearchBar
                    @valueChange="filterResults"
                    class="shadow-sm border mr-3"
                    extendable
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

<script>
    import SearchBar from "../../../components/SearchBar";
    import UiButton from "../../../components/ui/UiButton";
    import UiTable from "../../../components/ui/UiTable";

    export default {
        name: "SampleList",

        components: {
            SearchBar,
            UiButton,
            UiTable
        },

        data: function () {
            return {
                samples: undefined,
                loading: true,
            }
        },

        head: {
            title: {
                inner: 'Vzorky'
            },
            script: [
                {type: 'text/javascript', src: "js/ext/jsme.nocache.js", async: false},
            ],
        },

        computed: {
            options: function () {
                return {
                    data: {
                        items: this.samples,
                        onClick: sample => this.openModal(sample),
                        sort: (key, order) => this.$store.dispatch('Samples/sort', {key, order}),
                        loading: this.loading,
                        empty: 'Ľutujeme, nenašli sa žiadne vzorky'
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
        },

        methods: {
            filterResults(filter) {
                if (this.samples) {
                    this.$store.dispatch('Samples/filter', filter).then(() => {
                        this.samples = this.$store.getters['Samples/getSamples'];
                    });
                }
            },

            openModal(sample) {
                this.$store.dispatch(
                    'Modal/setModal',
                    {
                        componentName: 'SampleModal',
                        componentProps: {sample},
                        width: 144,
                    }
                );
            }
        },

        mounted() {
            this.$store.dispatch('Samples/fetchSamples').then(() => {
                this.loading = false;
            });

            this.$store.watch((state, getters) => getters['Samples/getSamples'], (samples) => {
                if (samples) {
                    this.samples = samples;
                    this.loading = false;
                }
            })
        },
    }
</script>
