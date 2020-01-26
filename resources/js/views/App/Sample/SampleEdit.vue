<template>

</template>

<script>
    export default {
        name: "SampleEdit",

        meta: {
            title: {
                //Todo: right name
                inner: `Vzorka`
            }
        },

        mounted() {
            this.$store.dispatch('Modal/dismiss')
        }
    }
</script>

<style scoped>

</style>
