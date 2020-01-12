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
                        <ui-input
                            type="text"
                            name="email"
                            :value="old('email')"
                            :required="true"
                            :autofocus="true"
                            placeholder="vasa@adresa.sk"
                            labeled
                            w-full
                        />
                    </div>

                    <div class="relative pt-3">
                        <label
                            for="password"
                            class="uppercase text-gray-600 text-xs font-bold absolute pl-3 pt-2"
                        >
                            Heslo
                        </label>
                        <ui-input
                            type="password"
                            name="password"
                            :value="old('password')"
                            :required="true"
                            placeholder="*********"
                            labeled
                            w-full
                        />
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
    import UiInput from "../components/ui/UiInput";

    export default {
        name: "LoginView.vue",

        components: {
            UiInput,
        },

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
