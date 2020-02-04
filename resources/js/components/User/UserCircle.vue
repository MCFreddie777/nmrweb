<template>
    <div
        class="rounded-full text-white bg-yellow-500 w-10 h-10 flex justify-center items-center">
        {{ firstChar }}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class UserCircleComponent extends Vue {

        @Prop({required: true})
        public name !: string;

        get firstChar() {
            return this.name.split(' ').map(str => str[0]).join('').toUpperCase();
        }
    }
</script>
