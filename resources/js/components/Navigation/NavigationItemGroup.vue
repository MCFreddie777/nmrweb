<template>
    <div
        class="mt-10"
    >
        <p class="uppercase text-sm text-gray-500 font-bold mb-2 pl-6">{{ group.title }}</p>
        <NavigationItem
            v-for="(item,index) in group.items"
            v-bind:key="index"
            :item="item"
        />
    </div>
</template>

<script>

    import NavigationItem from "./NavigationItem";

    export default {
        name: "NavigationItemGroup",

        props: [
            'group',
        ],

        components: {
            NavigationItem
        },

    }
</script>

<style scoped>

</style>
