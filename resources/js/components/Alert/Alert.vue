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
                @click="$store.dispatch('Alert/dismiss')"
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
            <p class="text-gray-800 p-3">
                {{ alert.message }}
            </p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Alert",

        data: () => ({
            alert: undefined,
        }),

        mounted() {
            this.$store.watch((state, getters) => getters['Alert/alert'], (alert) => {
                this.alert = alert;
            });

            setTimeout(() => {
                this.$store.dispatch('Alert/dismiss');
            }, 7000)
        }
    }
</script>

<style scoped>
    .close-btn {
        right: -1rem;
        background-color: RGBA(0, 0, 0, 0.30);
    }
</style>
