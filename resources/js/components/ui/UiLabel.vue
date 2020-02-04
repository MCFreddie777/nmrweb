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

<script lang="ts">

    import UiCheckbox from "./UiCheckbox.vue";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {
            UiCheckbox,
        }
    })
    export default class UiLabelComponents extends Vue {
        @Prop()
        public item !: LabelItem;

        @Prop({default: true})
        public center !: boolean;

        @Prop({default: 'text'})
        public type !: string;
    }

    interface LabelItem {
        name: string;
        value: string | boolean | number;
    }
</script>

<style scoped>

</style>
