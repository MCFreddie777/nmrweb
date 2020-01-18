<template>
    <div>
        <table
            class="w-full shadow-sm"
        >
            <thead>
            <tr>
                <th
                    v-for="header in headers"
                    class="first:pl-6 py-1 pb-4 font-normal uppercase text-xs text-gray-500"
                >
                    {{ header }}
                </th>
            </tr>
            </thead>

            <tbody
                v-if="!users || !users.length"
            >
            <tr>
                <td
                    :colspan="headers.length"
                >
                    <p class="text-gray-600 px-6">
                        Ľutujeme, nenašli sa žiadni užívatelia
                    </p>
                </td>
            </tr>

            </tbody>

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

        data: () => ({
            headers: [
                'login', 'local_dir', 'share_dir', 'spravca'
            ]
        }),

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

        tr th,td{
            @apply w-16;

            &:first-child {
                @apply w-32;
            }
        }

        tbody {
            @apply border-t border-gray-200;
        }

        tbody tr {
            td {
                @apply py-3 border-b border-gray-200;
            }
        }
    }
</style>
