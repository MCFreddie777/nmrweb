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
                <td
                    :class="$methods.tableRowsClassObject(options,0)"
                >
                    <div class="flex items-center">
                        <UserCircle :name="tableItem.login"/>
                        <span class="ml-3">{{ tableItem.login }}</span>
                    </div>
                </td>

                <td
                    class="text-gray-600"
                    :class="$methods.tableRowsClassObject(options,1)"
                >
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
                        items: [
                            'login',
                            'role'
                        ]
                    },
                    layout: {
                        '0': {
                            left: true
                        },
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
                        center: false,
                    }
                );
            },
        },

        mounted() {
            this.$store.dispatch('Users/fetchUsers').then(() => {
                this.loading = false;
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

