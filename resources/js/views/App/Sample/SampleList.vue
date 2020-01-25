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
                <td class="text-gray-600">
                    <p>{{ tableItem.id }}</p>
                </td>
                <td class="text-left">
                    <p>{{ tableItem.name }}</p>
                </td>
                <td>
                    {{ tableItem.user.login }}
                </td>
                <td>
                    {{ tableItem.created_at}}
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
                        items: [
                            {title: 'id', width: 16},
                            {title: 'názov', width: 96, left: true},
                            {title: 'používateľ'},
                            {title: 'dátum'}
                        ]
                    }
                }
            }
        },

        methods: {
            filterResults(result) {
                if (this.samples) {
                    this.filteredSamples = this.samples.filter(u => !u.name.indexOf(result))
                }
            },
        },

        mounted() {
            axios.get('/api/samples')
                .then(res => {
                    this.$store.dispatch('Samples/setSamples', res.data.samples);
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
