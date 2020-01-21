<template>
    <div>
        <label
            v-if="labeled"
            :for="name"
            @click.prevent="toggle"
        >
            {{ name }}
        </label>
        <div
            class="w-4 h-4 bg-yellow-500 rounded flex items-center justify-center"
            @click="toggle"
            ref=""
        >
            <i
                class="fas fa-check text-white text-xs"
                v-if="checked"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "ui-checkbox",

        props: {
            name: {
                type: String,
                required: true,
            },
            checked: {
                type: Boolean,
            },
            labeled: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            toggle() {
                this.$emit('updateField', !this.checked);
            }
        },
    }
</script>

<style lang="scss" scoped>
    label {
        @apply uppercase font-bold text-gray-500 text-sm;
    }
</style>
