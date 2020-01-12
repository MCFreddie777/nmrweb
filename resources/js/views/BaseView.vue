<template>
    <div class="h-screen bg-white flex">
        <Modal/>
        <Navigation/>
        <div class="flex flex-col flex-1 h-screen overflow-y-hidden border border-b-2 border-gray-300">
            <div
                class="flex h-16 shadow-lg justify-end pr-5"
            >
                <div class="flex items-center">
                    <UserCircle :name="user.name"/>
                    <span class="pl-3 text-gray-900">{{ user.name }}</span>
                </div>
            </div>
            <div class="flex flex-col flex-1 overflow-y-hidden bg-gray-300">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation/Navigation";
    import UserCircle from "../components/User/UserCircle";
    import Modal from "../components/Modal/Modal";

    export default {
        name: "BasicView",

        data() {
            return {
                user: {
                    name: 'admin'
                }
            }
        },

        components: {
            Navigation,
            UserCircle,
            Modal,
        },
    }
</script>

<style scoped>

</style>
