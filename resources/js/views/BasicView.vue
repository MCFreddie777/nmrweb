<template>
    <div class="h-screen bg-white flex">
        <Navigation/>
        <div class="flex flex-col flex-1 h-screen overflow-y-hidden">
            <div class="flex flex-col flex-1 overflow-y-hidden">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";

    export default {
        name: "BasicView",

        components: {
            Navigation
        },
    }
</script>

<style scoped>

</style>
