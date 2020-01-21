<template>
    <div class="h-screen bg-white flex">
        <Alert/>
        <Modal/>
        <Navigation/>
        <div class="flex flex-col flex-1 h-screen overflow-y-hidden">
            <div
                class="flex h-16 shadow justify-end pr-5 border-b border-gray-400"
                style="box-sizing: content-box;"
            >
                <div class="flex items-center">
                    <UserCircle :name="user.name"/>
                    <span class="pl-3 text-gray-900">{{ user.name }}</span>
                </div>
            </div>
            <div class="flex flex-col flex-1 overflow-y-hidden bg-gray-300 p-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation/Navigation";
    import UserCircle from "../components/User/UserCircle";
    import Modal from "../components/Modal/Modal";
    import Alert from "../components/Alert/Alert";

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
            Alert
        },
    }
</script>

<style scoped>

</style>
