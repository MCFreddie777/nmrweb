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


<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    import UiInput from "../../components/ui/UiInput.vue";
    import UiButton from "../../components/ui/UiButton.vue";

    @Component({
        components: {
            UiInput,
            UiButton
        },
        head: {
            title() {
                return {
                    inner: 'Zmena hesla',
                }
            }
        }
    })
    export default class ChangePasswordView extends Vue {

    }
</script>
