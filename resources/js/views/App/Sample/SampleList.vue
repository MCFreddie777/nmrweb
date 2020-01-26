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
                filteredSamples: undefined,
                loading: true,
            }
        },

        head: {
            title: {
                inner: 'Vzorky'
            }
        },

        computed: {
            options: function () {
                return {
                    data: {
                        items: this.filteredSamples,
                        onClick: sample => this.openModal(sample),
                        loading: this.loading,
                        empty: 'Ľutujeme, nenašli sa žiadne vzorky'
                    },
                    header: {
                        items: [
                            'id',
                            'názov',
                            'používateľ',
                            'dátum'
                        ]
                    },
                    layout: {
                        '0': {
                            width: 16,
                        },
                        '1': {
                            width: 96,
                            left: true
                        }
                    }
                }
            }
        },

        methods: {
            filterResults(result) {
                if (this.samples) {
                    this.filteredSamples = this.samples.filter(
                        u => !u.name.indexOf(result) || !u.user.login.indexOf(result)
                    )
                }
            },

            openModal(sample) {
                this.$store.dispatch(
                    'Modal/setModal',
                    {
                        componentName: 'SampleModal',
                        componentProps: {sample},
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
                    if (!this.filteredSamples) {
                        this.filteredSamples = samples;
                    } else {
                        const filteredKeys = new Set(this.filteredSamples.map(u => u.id));
                        this.filteredSamples = this.samples.filter(u => filteredKeys.has(u.id));
                    }
                }
            })
        },
    }
</script>
