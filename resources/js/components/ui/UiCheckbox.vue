<template>
    <div>
        <label
            v-if="labeled"
            :for="name"
            @click.prevent="toggle"
        >
            {{ name }}
        </label>
        <div
            class="w-4 h-4 bg-yellow-500 rounded flex items-center justify-center"
            @click="toggle"
            ref=""
        >
            <i
                class="fas fa-check text-white text-xs"
                v-if="checked"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class UiCheckboxComponent extends Vue {

        @Prop({required: true})
        public name!: string;

        @Prop()
        public checked !: boolean;

        @Prop({default: false})
        public labeled !: boolean;

        @Emit('update-field')
        toggle() {
            return !this.checked;
        }
    }
</script>

<style lang="scss" scoped>
    label {
        @apply uppercase font-bold text-gray-500 text-sm;
    }
</style>
