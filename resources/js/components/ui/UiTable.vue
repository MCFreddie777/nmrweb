<template>
    <table
        class="w-full shadow-sm"
    >
        <!-- Header -->
        <thead>
        <tr>
            <th
                v-for="(item,index) in options.header.items"
                class="py-1 pb-4 font-normal uppercase text-xs text-gray-500"
                :class=$methods.tableRowsClassObject(options,index)
            >
                {{ item }}
            </th>
        </tr>
        </thead>

        <tbody
            style="max-height: calc(100vh - (32px * 2) - 72px - 65px - 38px);"
        >

        <!-- Empty message -->
        <tr
            v-if="(!options.data.items || !options.data.items.length) && !options.data.loading"
        >
            <td
                :colspan="options.header.items.length"
            >
                <p class="text-gray-600 px-6 text-left">
                    {{options.data.empty}}
                </p>
            </td>
        </tr>

        <!-- Loading placeholder -->
        <tr
            v-for="i in [0,1,2]"
            v-if="options.data.loading"
            class="placeholder"
        >
            <td
                v-for="(item,index) in options.header.items"
                :class=$methods.tableRowsClassObject(options,index)
            >
                <div
                    class="inline-block bg-gray-200 w-3/4 h-full"
                >&nbsp;
                </div>
            </td>
        </tr>

        <tr
            v-for="(item) in options.data.items"
            :key="item.id"
            @click="options.data.onClick ? options.data.onClick(item) : undefined"
            class="hover:cursor-pointer hover:bg-gray-100"
        >
            <slot
                name="tableItemTemplate"
                :tableItem="item"
            />
        </tr>
        </tbody>
    </table>
</template>

<script>
    import HelperMixin from "../../mixins/Helpers";
    import UiTableMixin from "../../mixins/UiTableMethods";

    export default {
        name: "ui-table",

        mixins: [
            // UiTableMixin,
            // HelperMixin
        ],

        props: {
            options: {
                type: Object,
                required: true,
                data: {
                    type: [Array, Object],
                    loading: Boolean,
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
                },
                layout: {
                    type: Object,
                }
            }
        },
        created() {
            // console.log("This.methods: ",this.methods);
        }
    }
</script>

<style scoped lang="scss">

    table {
        text-align: center;

        thead, tbody {
            @apply block overflow-y-auto w-full;

            tr {
                @apply table w-full;
                table-layout: fixed;
            }
        }

        tbody {
            @apply border-t border-gray-200;

            tr {
                &.placeholder:last-child {
                    @apply opacity-50;
                }

                td {
                    @apply py-3 border-b border-gray-200;
                }
            }
        }
    }
</style>
