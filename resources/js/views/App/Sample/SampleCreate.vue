<template>
    <div>
        SampleCreate.vue
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        head: {
            title() {
                return {
                    inner: 'Nová vzorka'
                }
            }
        }
    })
    export default class SampleCreateView extends Vue {
    }
</script>

<style scoped>

</style>
