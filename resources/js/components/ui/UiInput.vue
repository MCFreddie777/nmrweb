<template>
    <div
        class="px-3 pb-1 bg-gray-300 rounded"
    >
        <!--            @input="$emit('input',$event.target.value)"-->
        <input
            :type="type"
            :id="name"
            :name="name"
            class="bg-gray-300 pt-2 pb-1 text-gray-700 outline-none placeholder-gray-500 self-center align-middle w-full"
            :autocomplete="type"
            :autofocus="autofocus"
            :placeholder="placeholder"
            required
            :value="value"
            @input="$emit('input',$event.target.value)"
        >
    </div>
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

        // get getValue() {
        //     return this.$refs.input.value;
        // }

    }
</script>

<style scoped lang="scss">
    div {
        /* variants */
        &[labeled] {
            @apply pt-8;
        }

        &[w-full] {
            @apply w-full;
        }
    }
</style>
