<template>
    <table
        class="w-full shadow-sm"
    >
        <!-- Header -->
        <thead>
        <tr>
            <th
                v-for="header in options.header.items"
                class="first:pl-6 py-1 pb-4 font-normal uppercase text-xs text-gray-500"
            >
                {{ header }}
            </th>
        </tr>
        </thead>

        <!-- Empty message -->
        <tbody>
        <tr
            v-if="(!options.data.items || !options.data.items.length) && !options.data.loading"
        >
            <td
                :colspan="options.header.items.length"
            >
                <p class="text-gray-600 px-6">
                    {{options.data.empty}}
                </p>
            </td>
        </tr>
        </tbody>

        <!-- Loading placeholder -->
        <tbody
            v-for="i in [0,1,2]"
            v-if="options.data.loading"
            class="placeholder"
        >
        <tr>
            <td
                v-for="item in options.header.items"
            >
                <div
                    class="inline-block bg-gray-200 w-3/4 h-full"
                >&nbsp;
                </div>
            </td>
        </tr>
        </tbody>


        <tbody
            v-for="item in options.data.items"
            :key="item.id"
            @click="options.data.onClick ? options.data.onClick(item) : undefined"
        >
        <tr class="hover:cursor-pointer hover:bg-gray-100">
            <slot name="tableItemTemplate" :tableItem="item"/>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "ui-table",

        props: {
            options: {
                type: Object,
                required: true,
                data: {
                    type: [Array, Object],
                    // loading: Boolean,
                    empty: String,
                    onClick: Function,
                },
                header: {
                    type: Object,
                    required: true,
                    items: {
                        type: Array,
                        required: true,
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    table {
        text-align: center;
        vertical-align: center;

        thead tr th:first-child,
        tbody:not(.placeholder) tr td:first-child {
            @apply text-left;
            @apply justify-start;
        }

        tbody.placeholder:last-child {
            @apply opacity-50;
        }

        tr th, td {
            @apply w-16;

            &:first-child {
                @apply w-32;
            }
        }

        tbody {
            @apply border-t border-gray-200;
        }

        tbody tr {
            td {
                @apply py-3 border-b border-gray-200;
            }
        }
    }
</style>