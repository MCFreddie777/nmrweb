<template>
    <div class="m-8">
        <div class="flex justify-start mb-3">
            <SearchBar class="shadow-sm" @valueChange="filterResults"/>
        </div>
        <UserList :users="filteredUsers"/>
    </div>
</template>

<script>
    import SearchBar from "../../../components/SearchBar";
    import UserList from "../../../components/User/UserList";

    export default {
        name: "UsersView",

        components: {
            UserList,
            SearchBar
        },

        data: () => ({
            users: undefined,
            filteredUsers: undefined
        }),

        methods: {
            filterResults(result) {
                this.filteredUsers = this.users.filter(u => !u.login.indexOf(result))
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
                this.users = users;

                if (!this.filteredUsers) {
                    this.filteredUsers = users;
                } else {
                    const filteredKeys = new Set(this.filteredUsers.map(u => u.id));
                    this.filteredUsers = this.users.filter(u => filteredKeys.has(u.id));
                }
            })
        },

    }
</script>

<style scoped>

</style>
