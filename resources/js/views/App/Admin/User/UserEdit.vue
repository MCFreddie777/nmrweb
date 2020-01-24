<template>

</template>

<script>
    export default {
        name: "UserDetail",

        mounted() {
            this.$store.dispatch('Modal/dismiss')
        }
    }
</script>

<style scoped>

</style>
