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
                <p class="text-center text-gray-700">Pokračujte prosím prihlásením sa</p>

                <form method="POST" action="/" class="relative" @submit.prevent="tryToLogIn">

                    <p
                        v-if="error"
                        class="text-red-500 absolute"
                        style="top:-2rem"
                    >
                        <span
                            v-if="error && error.length > 0"
                        >
                            {{ error }}
                        </span>
                        <span
                            v-else
                        >
                             Niekde nastala chyba. Skúste <!--
                --><a
                            href="#"
                            @click="$router.go(0)"
                            class="text-blue-500 underline"
                        >obnoviť stránku<!--
                --></a>.
                        </span>
                    </p>

                    <div
                        class="relative mt-16 border-2 rounded border-white"
                        :class="{'border-red-500':error}"
                    >
                        <label
                            for="login"
                            class="uppercase text-gray-600 text-xs font-bold absolute pl-3 pt-2"
                        >
                            Login
                        </label>
                        <ui-input
                            ref="loginInput"
                            type="text"
                            name="login"
                            :required="true"
                            :autofocus="true"
                            placeholder="vasa@adresa.sk"
                            labeled
                            w-full
                            @input="value => valueChanged('login',value)"
                            :value="credentials.login"
                        />
                    </div>

                    <div
                        class="relative mt-3 w-100 border-2 rounded border-white"
                        :class="{'border-red-500':error}">
                        <label
                            for="password"
                            class="uppercase text-gray-600 text-xs font-bold absolute pl-3 pt-2"
                        >
                            Heslo
                        </label>
                        <ui-input
                            ref="passwordInput"
                            type="password"
                            name="password"
                            :required="true"
                            placeholder="*********"
                            labeled
                            w-full
                            @input="value => valueChanged('password',value)"
                            :value="credentials.password"
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

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {namespace} from "vuex-class";

    import UiInput from "../components/ui/UiInput.vue";
    import {Credentials} from "../store/modules/auth.store";

    const auth = namespace('AuthStore');

    @Component({
        components: {
            UiInput,
        },
        head: {
            title() {
                return {inner: 'Prihlásenie'}
            }
        },
    })
    export default class LoginView extends Vue {
        @auth.Getter('csrf') csrf !: string;
        @auth.Action('logIn') login !: (credentials: Credentials) => Promise<any>;

        protected error: string | boolean = false;
        protected credentials: Credentials = {
            login: undefined,
            password: undefined,
        };

        $refs!: {
            loginInput: UiInput,
            passwordInput: UiInput,
        };

        tryToLogIn() {
            if (this.credentials.login?.trim() && this.credentials.password?.trim()) {
                this.login(this.credentials)
                    .catch(e => {
                        this.error = e;
                        this.credentials.password = '';
                    })
            }
        }

        valueChanged(type: 'password' | 'login', value: string) {
            this.credentials[type] = value;
            if (this.error) this.error = false;
        }
    }
</script>
