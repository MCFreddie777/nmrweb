<template>
    <div class="bg-white rounded-lg">
        <div class="p-4 pl-6">
            <h1 class="text-2xl mb-4">
                Zmena hesla
            </h1>

            <div class="flex items-center pb-3">
                <label
                    class="uppercase font-bold text-gray-500 text-sm block w-32 mr-5"
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

            <div class="flex items-center pb-3 w-full">
                <label
                    class="block uppercase font-bold text-gray-500 text-sm block w-32 mr-5"
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
                    class="uppercase font-bold text-gray-500 text-sm block w-32 mr-5"
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
                class="primary rounded-full mt-5 w-20"
                text="Uložiť"
            />
        </div>
    </div>
</template>

<script>
    import UiInput from "../../components/ui/UiInput";
    import UiButton from "../../components/ui/UiButton";

    export default {
        name: "ChangePasswordView",

        head: {
            title: {
                inner: 'Zmena hesla',
            }
        },

        components: {
            UiInput,
            UiButton
        }
    }
</script>

<style scoped>

</style>
