<template>
    <div>
        <p class="text-gray-600" v-if="!users || !users.length">Ľutujeme, nenašli sa žiadni používatelia.</p>
        <table
            v-if="users && users.length > 0"
            class="w-full rounded bg-white shadow-sm"
        >

            <thead>
            <tr>
                <th
                    v-for="key in Object.keys(users[0]).slice(1,5)"
                    class="border-b border-gray-200 first:pl-4 py-1 font-normal text-gray-600"
                >
                    {{ key }}
                </th>
            </tr>
            </thead>

            <tbody
                v-for="user in users"
                :key="user.id"
                @click="openUserModal(user)"
            >
            <tr class="hover:cursor-pointer hover:bg-gray-100">
                <td>
                    <div class="flex items-center pl-3">
                        <UserCircle :name="user.login"/>
                        <span class="ml-3">{{ user.login }}</span>
                    </div>
                </td>

                <td
                    v-for="prop in Object.keys(user).slice(2,5)"
                >
                    <label :for="prop" class="hidden">{{prop}}</label>
                    <input type="checkbox" :name="prop" disabled :checked="user[prop] === 1">
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import UserCircle from "./UserCircle";

    export default {
        name: "UserList",

        components: {
            UserCircle,
        },

        props: {
            users: {
                type: Array,
            }
        },

        methods: {
            openUserModal(user) {
                this.$store.dispatch(
                    'Modal/setModal',
                    {
                        componentName: 'UserEditModal',
                        componentProps: {user},
                        closable: false,
                    }
                );
            },
        },
    }
</script>

<style scoped lang="scss">
    table {
        text-align: center;
        vertical-align: center;

        thead tr th:first-child,
        tbody tr td:first-child {
            @apply text-left;
            @apply justify-start;
        }

        tbody tr {
            td {
                @apply py-3 border-b border-gray-200;
            }
        }
    }
</style>
