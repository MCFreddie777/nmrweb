<template>
    <div>
        UserCreate.vue
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        head: {
            title() {
                return {
                    inner: 'Nový užívateľ'
                }
            }
        }
    })
    export default class UserCreateView extends Vue {
    }
</script>
