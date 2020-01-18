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
                />
            </div>
        </div>
        <UserList :users="filteredUsers"/>
    </div>
</template>

<script>
    import SearchBar from "../../../components/SearchBar";
    import UserList from "../../../components/User/UserList";
    import UiButton from "../../../components/ui/UiButton";

    export default {
        name: "UsersView",

        components: {
            UserList,
            SearchBar,
            UiButton
        },

        data: () => ({
            users: undefined,
            filteredUsers: undefined
        }),

        methods: {
            filterResults(result) {
                if (this.users) {
                    this.filteredUsers = this.users.filter(u => !u.login.indexOf(result))
                }
            }
        },

        mounted() {
            axios.get('/api/users')
                .then(res => {
                    this.$store.dispatch('App/setUsers', res.data);
                })
                .catch(e => {
                    // Todo: errorService (modal)
                    console.error(e)
                });

            this.$store.watch((state, getters) => getters['App/getUsers'], (users, s) => {
                if (users) {
                    console.log("Users: ", users);
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

<style scoped>

</style>
