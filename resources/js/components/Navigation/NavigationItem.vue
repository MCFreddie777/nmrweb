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

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {namespace} from "vuex-class";

    const app = namespace('AppStore');

    @Component
    export default class NavigationItem extends Vue {
        @app.Getter('isNavigationCollapsed') collapsed !: boolean;

        @Prop({required: true})
        item !: NavigationItem;
    }
</script>

<style scoped lang="scss">
    .router-link-active {
        i {
            @apply .text-yellow-500;
        }

        @apply .bg-gray-700 .text-gray-500;
    }

    :not([data-collapsed]) > .router-link-active {
        @apply .border-r-4 .border-yellow-500 ;
    }
</style>
