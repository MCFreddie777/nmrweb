<template>
    <div class="h-full flex bg-gray-200">
        <div class="fixed flex w-full shadow-lg bg-yellow-500 p-4">
            <div>
                <img src="/img/logo-extended.png" alt="STU FCHPT logo" class="w-3/4">
            </div>
        </div>

        <div class="mx-auto flex justify-center items-center ">

            <div class="w-96 bg-white rounded-lg shadow-xl p-8">

                <h1 class="text-gray-800 text-3xl font-bold pt-3 text-center">Vitajte</h1>
                <p class=" text-center text-gray-700">Pokračujte prosím prihlásením sa</p>

                <form method="POST" action="/" class="pt-16" @submit.prevent="login">

                    <div class="relative">

                        <label
                            for="email"
                            class="uppercase text-gray-600 text-xs font-bold absolute pl-3 pt-2"
                        >
                            Login
                        </label>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="pt-8 w-full rounded p-2 px-3 bg-gray-300 text-gray-700 outline-none placeholder-gray-500"
                                :value="old('email')"
                                required
                                autocomplete="email"
                                autofocus
                                placeholder="vasa@adresa.sk"
                            >
                        </div>

                    </div>

                    <div class="relative pt-3">

                        <label
                            for="password"
                            class="uppercase text-gray-600 text-xs font-bold absolute pl-3 pt-2"
                        >
                            Heslo
                        </label>

                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="pt-8 w-full rounded p-2 px-3 bg-gray-300 text-gray-700 outline-none placeholder-gray-500"
                                required
                                autocomplete="current-password"
                                placeholder="*********"

                            >
                        </div>

                    </div>


                    <div class="pt-8 text-center">
                        <button
                            type="submit"
                            class="bg-yellow-500 py-2 px-6 text-center rounded-full text-white mx-auto hover:bg-yellow-400 focus:outline-none"
                        >
                            Prihlásiť sa
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginView.vue",

        computed: {
            csrf: function () {
                return this.$store.getters['Auth/csrf']
            }
        },

        methods: {
            login() {
                this.$store.dispatch('Auth/logIn')
            },

            old(param) {

            }
        }
    }
</script>

<style scoped>

</style>
