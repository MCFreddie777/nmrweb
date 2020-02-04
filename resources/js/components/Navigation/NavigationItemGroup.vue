<template>
    <!--        :class="!collapsed ? 'mt-10' : ''"-->
    <div>
        <p
            class="uppercase text-sm text-gray-500 font-bold mb-2 pl-6"
            :class="collapsed ? 'hidden':''"
        >{{ group.title }}</p>
        <navigation-item
            v-for="(item,index) in group.items"
            :key="index"
            :item="item"
        />
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    import NavigationItem from "./NavigationItem.vue";
    import {NavigationGroup} from "../../store/modules/app.store";
    import {namespace} from "vuex-class";

    const app = namespace('AppStore');

    @Component({
        components: {
            NavigationItem
        },
    })
    export default class NavigationItemGroupComponent extends Vue {
        @app.Getter('isNavigationCollapsed') collapsed !: boolean;

        @Prop({required: true})
        group !: NavigationGroup;
    }
</script>
