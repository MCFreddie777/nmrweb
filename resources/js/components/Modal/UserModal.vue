<template>
    <div class="p-1" v-if="user">

        <h1 class="text-2xl capitalized mb-4">
            {{ capitalize(user.login) }}
        </h1>

        <div class="flex items-center pb-3">
            <label
                class="uppercase font-bold text-gray-500 text-sm block mr-2"
                for="password"
            >
                role:
            </label>
            <span class="text-gray-700"> {{ user.role.name }}</span>
        </div>


        <div class="flex justify-end">
            <ui-button
                class="secondary rounded-full"
                @click="$store.dispatch('Modal/dismiss')"
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

<script>
    import UiInput from "../ui/UiInput";
    import UiButton from "../ui/UiButton";

    export default {
        name: "UserModal",

        props: {
            user: {
                type: Object,
                required: true,
            }
        },

        components: {
            UiInput,
            UiButton
        },
    }
</script>

<style scoped>

</style>
