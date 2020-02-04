<template>
    <div v-if="modal && modal.active">
        <div class="overlay" @click="dismiss"></div>
        <div
            class="h-screen w-screen absolute flex justify-center"
            :class="modal.center ? 'items-center' : 'mt-40'"
        >
            <div class="flex justify-center items-center absolute bg-white rounded-sm z-20 shadow">
                <div
                    class="p-4 relative"
                    :class="`w-${modal.width}`"
                >
                    <i class="fas fa-times hover:cursor-pointer absolute right-0 top-0 p-2 text-gray-600"
                       @click="dismiss"
                       v-if="modal.closable"
                    />
                    <component
                        :is="modal.componentName"
                        v-bind="modal.componentProps"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    import UserModal from "./UserModal.vue";
    import SampleModal from "./SampleModal.vue";
    import {Modal} from "../../store/modules/modal.store";
    import {namespace} from "vuex-class";

    const modal = namespace('ModalStore');

    @Component({
        components: {
            UserModal,
            SampleModal
        }
    })
    export default class ModalComponent extends Vue {
        @modal.Action('dismiss') private dismissModal !: () => void;
        @modal.Getter('getModal') public modal !: Modal;

        dismiss() {
            this.dismissModal();
        }

        created() {
            document.addEventListener('keyup', e => {
                if (e.key === 'Escape') {
                    this.dismiss();
                } else return;
            });
        }
    }
</script>

<style scoped lang="scss">
    .overlay {
        @apply h-screen w-screen absolute bg-black opacity-25 z-10;
    }
</style>
