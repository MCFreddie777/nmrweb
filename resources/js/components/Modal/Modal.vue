<template>
    <div v-if="modal && modal.active">
        <div class="overlay" @click="dismiss"></div>
        <div
            class="h-screen w-screen absolute flex justify-center"
            :class="modal.center ? 'items-center' : 'mt-40'"
        >
            <div class="flex justify-center items-center absolute bg-white rounded-sm z-20 shadow">
                <div class="w-112 p-4 relative">
                    <i class="fas fa-times hover:cursor-pointer absolute right-0 top-0 p-2 text-gray-600"
                       @click="dismiss"
                       v-if="modal.closable"
                    />
                    <component :is="modal.componentName" v-bind="modal.componentProps"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserModal from "./UserModal";
    import SampleModal from "./SampleModal";

    export default {
        name: "ui-modal",

        data: () => ({
            modal: undefined,
        }),

        components: {
            UserModal,
            SampleModal
        },

        methods: {
            dismiss() {
                this.$store.dispatch('Modal/dismiss');
            }
        },

        mounted() {
            this.$store.watch((state, getters) => getters['Modal/modal'], (modal) => {
                this.modal = modal;
            })
        }
    }
</script>

<style scoped lang="scss">
    .overlay {
        @apply h-screen w-screen absolute bg-black opacity-25 z-10;
    }
</style>
