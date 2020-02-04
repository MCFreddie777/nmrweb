<template>
    <div class="p-1" v-if="user">

        <h1 class="text-2xl capitalized mb-4">
            {{ user.login }}
        </h1>

        <div class="flex items-center pb-3">
            <label
                class="uppercase font-bold text-gray-500 text-sm block mr-2"
            >
                role:
            </label>
            <span class="text-gray-700"> {{ user.role.name }}</span>
        </div>


        <div class="flex justify-end">
            <ui-button
                class="secondary rounded-full"
                @click="dismissModal"
                text="Zavrieť"
            />

            <router-link
                :to="`/users/${user.id}`"
            >
                <ui-button
                    class="ml-1 primary rounded-full"
                    text="Upraviť"
                />
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import UiInput from "../ui/UiInput.vue";
    import UiButton from "../ui/UiButton.vue";
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {User} from "../../store/modules/user.store";
    import {namespace} from "vuex-class";

    const modal = namespace('ModalStore');

    @Component({
        components: {
            UiInput,
            UiButton
        },
    })
    export default class UserModalComponent extends Vue {
        @modal.Action('dismiss') dismissModal!: () => void;

        @Prop({required: true})
        public user !: User;
    }
</script>

