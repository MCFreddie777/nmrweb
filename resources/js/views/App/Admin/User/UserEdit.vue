<template>
    <div>
        UserEdit.vue
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        head: {
            title() {
                return {
                    inner: 'Používateľ'
                }
            }
        }
    })
    export default class UserEditView extends Vue {}
</script>

<style scoped>

</style>
