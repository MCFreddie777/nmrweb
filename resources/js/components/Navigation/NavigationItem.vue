<template>
    <div class="flex flex-col">
        <router-link
            :to="item.path"
            class="flex items-center px-6 py-2 hover:bg-gray-700 text-gray-600 hover:text-gray-500"
        >
            <i :class="item.icon" class="w-1/6"/>
            <span class="text-md pl-1 w-5/6">{{ item.title }}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavigationItem",

        props: [
            'item',
        ],
    }
</script>

<style scoped lang="scss">
    .router-link-active {
        i {
            //noinspection CssInvalidAtRule
            @apply .text-yellow-500;
        }

        //noinspection CssInvalidAtRule
        @apply .bg-gray-700 .border-r-4 .border-yellow-500 .text-gray-500;
    }
</style>
