<template>
    <div
        v-if="alert && alert.active"
        class="flex justify-center mt-10 z-50 absolute w-screen"
    >
        <div
            class="bg-white w-96 shadow relative"
        >
            <div
                class="absolute close-btn top-0 right-0 w-4 h-4 flex justify-center text-gray-800 shadow hover:cursor-pointer"
                @click="dismissAlert"
            >
                <i class="fas fa-times"/>
            </div>
            <div
                class="w-full h-2"
                :class="{
                    'bg-red-700': alert.type === 'error',
                    'bg-green-500':alert.type==='success'
                }"
            >&nbsp;
            </div>
            <div
                class="text-gray-800 p-3 text-center"
            >
                <p
                    v-if="alert.message"
                >
                    {{ alert.message }}
                </p>
                <p v-else>
                    Ups! Niekde nastala chyba. Skúste <!--
                --><a
                    href="#"
                    @click="$router.go(0)"
                    class="text-blue-500 underline"
                >obnoviť stránku<!--
                --></a>.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'
    import {AlertOptions} from "../../store/modules/alert.store";
    import {namespace} from "vuex-class";

    const alert = namespace('AlertStore');

    @Component
    export default class AlertComponent extends Vue {
        @alert.Action('dismiss') dismissAlert!: Function;
        @alert.Getter('getAlert') public alert!: AlertOptions;

        @Watch('alert', {
            immediate: true, deep: true
        })
        alertChanged(alert: AlertOptions) {
            if (alert && alert.type && alert.type != 'error') {
                setTimeout(() => {
                    this.dismissAlert();
                }, 7000)
            }
        }
    }
</script>

<style scoped>
    .close-btn {
        right: -1rem;
        background-color: RGBA(0, 0, 0, 0.30);
    }
</style>
