<template>
    <input
        :type="type"
        :id="name"
        :name="name"
        class="p-2 px-3 rounded bg-gray-300 text-gray-700 outline-none placeholder-gray-500 self-center align-middle"
        :value="value"
        required
        :autocomplete="type"
        :autofocus="autofocus"
        :placeholder="placeholder"
    >
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class UiInputComponent extends Vue {

        @Prop({default: 'text'})
        public type !: string;

        @Prop({required: true})
        public name !: string;

        @Prop({default: ''})
        public value !: string;

        @Prop({default: false})
        public autofocus !: boolean;

        @Prop({required: true})
        public placeholder !: string;

    }
</script>

<style scoped lang="scss">
    input {
        /* variants */
        &[labeled] {
            @apply pt-8;
        }

        &[w-full] {
            @apply w-full;
        }
    }
</style>
