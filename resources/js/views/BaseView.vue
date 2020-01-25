<template>
    <div class="h-screen bg-white flex">
        <Alert/>
        <Modal/>
        <Navigation/>
        <div
            class="flex flex-col flex-1 h-screen max-h-full overflow-y-auto"
        >
            <div
                class="flex h-16 justify-between shadow border-b border-gray-400 items-center "
                style="box-sizing: content-box;"
            >
                <p class="pl-8 text-xl">
                    <!-- TODO: might add title (discuss) -->
                    <!-- Centrálne laboratóriá-->
                </p>
                <div
                    class="flex justify-end h-full"
                >
                    <router-link
                        class="flex px-5 items-center hover:cursor-pointer hover:bg-gray-100"
                        to="/change-password"
                    >
                        <UserCircle :name="user.name"/>
                        <span class="pl-3 text-gray-900">{{ user.name }}</span>
                    </router-link>
                </div>
            </div>
            <div
                class="flex flex-col flex-1 bg-gray-300 p-8 overflow-y-auto"
                style="max-height: calc(100vh - 65px);"
            >
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
