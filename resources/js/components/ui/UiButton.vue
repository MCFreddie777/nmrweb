<template>
    <div class="flex justify-center items-center">
        <i v-if="icon" :class="icon" class="mr-2"/>
        <button
            @click="$emit('click')"
        >
            {{ text }}
        </button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class UiButtonComponent extends Vue {

        @Prop({required: true})
        public text!: string;

        @Prop()
        public icon!: string;
    }
</script>

<style scoped lang="scss">

    div {

        &.rounded-full {
            @apply rounded-full;
        }

        &.rounded {
            @apply rounded;
        }

        @apply px-3 py-1;

        &:hover {
            cursor: pointer;
        }

        &:focus button, button:focus {
            @apply outline-none;
        }

        button {
            text-align: center;
        }

        &.primary {
            @apply bg-yellow-500 text-white;

            &:hover {
                @apply bg-yellow-400;
            }

        }

        &.secondary {
            @apply border border-gray-600 text-gray-600;

            &:hover {
                @apply bg-gray-200;
            }
        }
    }

</style>
