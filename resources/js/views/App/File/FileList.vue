<template>
    <div>
        FileList.vue
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        head: {
            title() {
                return {
                    inner: 'Súbory'
                }
            }
        }
    })
    export default class FileListView extends Vue {

    }
</script>
