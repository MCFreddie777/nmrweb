<template>
    <div class="flex pb-3"
         :class="{'items-center': center}"
    >
        <label
            class="uppercase font-bold text-gray-500 text-sm block mr-2 w-1/3"
        >
            {{ item.key }}:
        </label>
        <ui-checkbox
            v-if="type === 'checkbox'"
            name="vrátiť vzorku"
            :checked="Boolean(item.value)"
        />
        <span
            v-else
            class="text-gray-700 w-2/3"
        >
            {{ item.value }}<!--
            -->{{ item.sidenote ? ` (${item.sidenote})` : ''}}<!--
        --></span>
    </div>
</template>

<script>
    import UiCheckbox from "./UiCheckbox";

    export default {
        name: "ui-label",

        components: {
            UiCheckbox,
        },

        props: {
            item: {
                type: Object,
                name: {
                    type: String,
                    required: true,
                },
                value: {
                    type: [String, Boolean, Number],
                    required: true,
                }
            },
            center: {
                type: Boolean,
                default: true,
            },
            type: {
                type: String,
                default: 'text',
            }
        }
    }
</script>

<style scoped>

</style>
