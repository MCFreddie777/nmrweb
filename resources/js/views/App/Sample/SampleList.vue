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
                <td>
                    <div class="flex items-center pl-6">
                        <span class="ml-3">{{ tableItem.name }}</span>
                    </div>
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

        computed: {
            options: function () {
                return {
                    data: {
                        items: this.filteredSamples,
                        onClick: undefined,
                        loading: this.loading,
                        empty: 'Ľutujeme, nenašli sa žiadne vzorky'
                    },
                    header: {
                        items: ['login', 'role_id']
                    }
                }
            }
        },

        methods: {
            filterResults(result) {
                if (this.samples) {
                    this.filteredSamples = this.samples.filter(u => !u.login.indexOf(result))
                }
            },
        },

        mounted() {
            axios.get('/api/samples')
                .then(res => {
                    this.$store.dispatch('Samples/setSamples', res.data);
                    this.loading = false;
                })
                .catch(e => {
                    this.$store.dispatch(
                        'Alert/setAlert',
                        {
                            type: 'error',
                            message: e.response.data.message || 'Ups! Niekde nastala chyba. Skúste obnoviť stránku.'
                        }
                    );
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

<style scoped>

</style>
