<template>

</template>


<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        head: {
            title() {
                return {
                    inner: 'Vzorka'
                }
            }
        }
    })
    export default class SampleEditView extends Vue {
    }
</script>

<style scoped>

</style>
