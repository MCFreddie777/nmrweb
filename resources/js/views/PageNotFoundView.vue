<template>
    <div class="h-full flex-col bg-gray-200">
        <div class="flex w-full shadow-lg bg-yellow-500 p-4 h-18">
            <div>
                <img src="/img/logo-extended.png" alt="STU FCHPT logo" class="w-3/4">
            </div>
        </div>
        <div class="flex flex-col items-center mt-32 leading-tight">
            <span
                class="text-bold text-yellow-500"
                style="font-size: 10rem;"
            >
                404
            </span>
            <span class="text-bold text-2xl">
                Ups! Nič sme nenašli...
            </span>

            <ui-button
                text="Ísť na domov"
                class="primary rounded-full w-32 h-8 mt-6"
                @click="$router.push('/')"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    import UiButton from "../components/ui/UiButton.vue";

    @Component({
        components: {
            UiButton
        },
        head: {
            title() {
                return {
                    inner: '404 - Stránka nenájdená'
                }
            }
        }
    })
    export default class PageNotFoundView extends Vue {
    }
</script>

<style scoped>

</style>
