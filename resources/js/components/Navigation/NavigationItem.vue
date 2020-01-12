<template>
    <div
        class="flex flex-col"
        :data-collapsed="collapsed"
    >
        <router-link
            :to="item.path"
            class="flex items-center justify-center py-2 hover:bg-gray-700 text-gray-600 hover:text-gray-500"
            :class="collapsed ? 'flex-col h-24 justify-center py-3' : 'px-6 '"
        >
            <i
                :class="[item.icon,collapsed ? 'w-full text-center text-2xl' : 'w-1/6']"
            />
            <span
                class="text-md w-5/6"
                :class="collapsed ? 'w-full text-center mt-2 px-1 ' : 'pl-1'"
            >{{ item.title }}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavigationItem",

        props: {
            'item': {
                type: Object,
                required: true,
            }
        },

        computed: {
            collapsed: function () {
                return this.$store.getters['App/isNavigationCollapsed'];
            },
        },
    }
</script>

<style scoped lang="scss">
    .router-link-active {
        i {
            //noinspection CssInvalidAtRule
            @apply .text-yellow-500;
        }

        //noinspection CssInvalidAtRule
        @apply .bg-gray-700 .text-gray-500;
    }

    :not([data-collapsed]) > .router-link-active {
        //noinspection CssInvalidAtRule
        @apply .border-r-4 .border-yellow-500 ;
    }
</style>
