<template>
<!--        :class="!collapsed ? 'mt-10' : ''"-->
    <div>
        <p
            class="uppercase text-sm text-gray-500 font-bold mb-2 pl-6"
            :class="collapsed ? 'hidden':''"
        >{{ group.title }}</p>
        <NavigationItem
            v-for="(item,index) in group.items"
            :key="index"
            :item="item"
        />
    </div>
</template>

<script>
    import NavigationItem from "./NavigationItem";

    export default {
        name: "NavigationItemGroup",

        props: {
            'group': {
                type: Object,
                required: true
            }
        },
        components: {
            NavigationItem
        },

        computed: {
            collapsed: function () {
                return this.$store.getters['App/isNavigationCollapsed'];
            },
        },
    }
</script>
