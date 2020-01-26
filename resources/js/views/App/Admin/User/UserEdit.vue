<template>

</template>

<script>
    export default {
        name: "UserDetail",

        head: {
            title: {
                //Todo: right name
                inner: 'Používateľ'
            }
        },

        mounted() {
            this.$store.dispatch('Modal/dismiss')
        }
    }
</script>

<style scoped>

</style>
