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

<script>
    export default {
        name: "ui-input",

        props: {
            type: {
                type: String,
                default: 'text'
            },
            name: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                default: '',
            },
            autofocus: {
                type: Boolean,
                default: false,
            },
            placeholder: {
                type: String,
                required: true,
            }
        }
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
