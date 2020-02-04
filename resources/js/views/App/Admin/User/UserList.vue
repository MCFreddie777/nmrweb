<template>

    <div class="bg-white rounded-lg">
        <div class="p-4 pl-6 flex justify-between">
            <h1 class="text-2xl">Užívatelia</h1>
            <div class="flex justify-end">
                <SearchBar
                    class="shadow-sm border mr-3"
                    @valueChange="filterResults"
                    :extendable="true"
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
                        <user-circle :name="tableItem.login"/>
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

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    import SearchBar from "../../../../components/SearchBar.vue";
    import UiButton from "../../../../components/ui/UiButton.vue";
    import UiTable from "../../../../components/ui/UiTable.vue";
    import UserCircle from "../../../../components/User/UserCircle.vue";
    import {SortOptions, TableOptions} from "../../../../store/modules/table.store";
    import {User} from "../../../../store/modules/user.store";
    import {namespace} from "vuex-class";

    const users = namespace('UserStore');
    const modal = namespace('ModalStore');

    @Component({
        components: {
            SearchBar,
            UiButton,
            UiTable,
            UserCircle
        },
        head: {
            title() {
                return {
                    inner: 'Správa užívateľov'
                }
            }
        },
    })
    export default class UserListView extends Vue {
        @users.Action('sort') private sortUsers!: (sort: SortOptions) => void;
        @users.Action('filter') private filterUsers!: (filter: string) => void;
        @users.Action('fetch') private fetchUsers!: () => Promise<User[]>;
        @users.Getter('getUsers') private users !: User[];
        @modal.Action('set') private setModal !: (payload: any) => void;

        private loading: boolean = true;

        get options(): TableOptions<User> {
            return {
                data: {
                    items: this.users,
                    onClick: (user: User) => this.openUserModal(user),
                    sort: (sort: SortOptions) => this.sortUsers(sort),
                    loading: this.loading,
                    empty: 'Ľutujeme, nenašli sa žiadni užívatelia',
                },
                header: {
                    items: [
                        {
                            name: 'login',
                        },
                        {
                            name: 'rola',
                            key: 'role.name',
                        },
                    ],
                },
                layout: {
                    '0': {
                        left: true
                    },
                }
            }
        }

        filterResults(filter: string) {
            if (this.users) {
                this.filterUsers(filter);
            }
        }

        openUserModal(user: User) {
            this.setModal(
                {
                    componentName: 'UserModal',
                    componentProps: {user},
                    center: false,
                }
            );
        }

        mounted() {
            this.fetchUsers().then(() => {
                this.loading = false;
            })
        }
    }
</script>

