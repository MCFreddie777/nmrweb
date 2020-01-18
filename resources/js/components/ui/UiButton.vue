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

<script>
    export default {
        name: "ui-button",
        props: {
            text: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
            }
        }
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
