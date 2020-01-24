<template>

    <div class="bg-white rounded-lg">
        <div class="p-4 pl-6 flex justify-between">
            <h1 class="text-2xl">Užívatelia</h1>
            <div class="flex justify-end">
                <SearchBar
                    class="shadow-sm border mr-3"
                    @valueChange="filterResults"
                    extendable
                />
                <ui-button
                    icon="fas fa-plus"
                    class="primary rounded-full"
                    text="Nový užívateľ"
                    @click="$router.push({ path: 'new', append: true })"
                />
            </div>
        </div>

        <ui-table
            :options="options"
        >
            <template #tableItemTemplate="{tableItem}">
                <td>
                    <div class="flex items-center pl-6">
                        <UserCircle :name="tableItem.login"/>
                        <span class="ml-3">{{ tableItem.login }}</span>
                    </div>
                </td>

                <td>
                    {{ tableItem.role.name }}
                </td>
            </template>
        </ui-table>
    </div>
</template>

<script>
    import SearchBar from "../../../../components/SearchBar";
    import UiButton from "../../../../components/ui/UiButton";
    import UiTable from "../../../../components/ui/UiTable";
    import UserCircle from "../../../../components/User/UserCircle";

    export default {
        name: "UserList",

        components: {
            SearchBar,
            UiButton,
            UiTable,
            UserCircle
        },

        data: function () {
            return {
                users: undefined,
                filteredUsers: undefined,
                loading: true,
            }
        },

        computed: {
            options: function () {
                return {
                    data: {
                        items: this.filteredUsers,
                        onClick: user => this.openUserModal(user),
                        loading: this.loading,
                        empty: 'Ľutujeme, nenašli sa žiadni užívatelia'
                    },
                    header: {
                        items: ['login', 'role']
                    }
                }
            }
        },

        methods: {
            filterResults(result) {
                if (this.users) {
                    this.filteredUsers = this.users.filter(u => !u.login.indexOf(result))
                }
            },

            openUserModal(user) {
                this.$store.dispatch(
                    'Modal/setModal',
                    {
                        componentName: 'UserModal',
                        componentProps: {user},
                    }
                );
            },
        },

        mounted() {
            axios.get('/api/users')
                .then(res => {
                    this.$store.dispatch('Users/setUsers', res.data.users);
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

            this.$store.watch((state, getters) => getters['Users/getUsers'], users => {
                if (users) {
                    this.users = users;
                    if (!this.filteredUsers) {
                        this.filteredUsers = users;
                    } else {
                        const filteredKeys = new Set(this.filteredUsers.map(u => u.id));
                        this.filteredUsers = this.users.filter(u => filteredKeys.has(u.id));
                    }
                }
            })
        },
    }
</script>

