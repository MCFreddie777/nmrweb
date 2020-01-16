<template>
    <div class="bg-white rounded border border-gray-400 p-8 shadow">
        <h1 class="text-2xl mb-4">
            Zmena hesla
        </h1>

        <div class="flex items-center pb-3">
            <label
                class="uppercase font-bold text-gray-500 text-sm block w-1/12 mr-5"
                for="password"
            >
                Aktuálne Heslo
            </label>
            <ui-input
                type="password"
                name="old_password"
                :required="true"
                placeholder="••••••••"
            />
        </div>

        <div class="flex items-center pb-3">
            <label
                class="uppercase font-bold text-gray-500 text-sm block w-1/12 mr-5"
                for="password"
            >
                Nové Heslo
            </label>
            <ui-input
                type="password"
                name="password"
                :required="true"
                placeholder="••••••••"
            />
        </div>

        <div class="flex items-center pb-3">
            <label
                class="uppercase font-bold text-gray-500 text-sm block w-1/12 mr-5"
                for="confirm_password"
            >
                Potvrdiť heslo
            </label>
            <ui-input
                type="password"
                name="confirm_password"
                :required="true"
                placeholder="••••••••"
            />
        </div>

        <ui-button
            class="primary mt-4 w-20"
            text="Save"
        />
    </div>
</template>

<script>
    import UiInput from "../../components/ui/UiInput";
    import UiButton from "../../components/ui/UiButton";

    export default {
        name: "ChangePasswordView",

        components: {
            UiInput,
            UiButton
        }
    }
</script>

<style scoped>

</style>
