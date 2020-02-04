<template>
    <table
        class="w-full shadow-sm"
    >
        <!-- Header -->
        <thead>
        <tr>
            <th
                v-for="(item,index) in options.header.items"
                class="py-1 pb-4 font-normal uppercase text-xs text-gray-500 hover:cursor-pointer relative"
                :class="[
                    $methods.tableRowsClassObject(options,index),
                    {'font-bold': sort.key === (item.key || item.name)}
            ]"
                @click="sortItems(item.key || item.name)"
            >
                {{ item.name }}
                <i
                    v-if="sort.key === (item.key || item.name)"
                    class="fas ml-1 absolute top-0"
                    style="top:1px"
                    :class="sort.order === 'DESC' ? 'fa-sort-down mt-1' : 'fa-sort-up mt-2'"
                />
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

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {SortOptions, TableOptions} from "../../store/modules/table.store";
    import {namespace} from "vuex-class";

    const table = namespace('TableStore');

    @Component
    export default class UiTableComponent extends Vue {
        @table.Getter('getSort') public sort !: SortOptions;

        @Prop({required: true})
        public options !: TableOptions<any>;

        sortItems(key: string) {
            const order = (key === this.sort.key) ? (this.sort.order === 'DESC') ? 'ASC' : 'DESC' : 'DESC';
            this.options.data.sort({key, order});
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
