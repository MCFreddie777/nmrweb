<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "App",

        data: function () {
            return {
                title: ''
            }
        },

        watch: {
            $route(to, from) {
                this.title = to.meta.title
            },

            title() {
                document.title = `${this.title} | NMR a HS`
            }
        },

        created() {
            this.title = this.$route.meta.title;
        }
    }
</script>

<style scoped>

</style>
