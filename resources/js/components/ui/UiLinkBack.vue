<template>

    <a href="#" @click.prevent="$router.go(-1)">
        <div class="mr-6 flex items-center text-gray-500 hover:text-yellow-500">
            <i class="fas fa-arrow-left"/>
            <p class="ml-2">Späť</p>
        </div>
    </a>
</template>

<script>
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class UiLinkBackComponent extends Vue {}
</script>

<style scoped>

</style>
