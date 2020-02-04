<template>
    <div
        class="bg-white rounded flex flex-row-reverse items-center px-1 h-10"
        @click="handleClick"
        :class="{
            'w-10 justify-center' : !extended && extendable,
            'w-48' : extended && extendable,
             'rounded-full cursor-pointer' : extendable
        }"
        style="transition: width 0.1s ease-in-out;"
    >
        <i
            class="fas fa-search text-gray-500"
            :class="{'px-1' : extended}"
        />
        <input
            v-show="extended"
            ref="input"
            type="search"
            class="focus:outline-none w-full py-1 pl-2"
            :class="{'rounded-full' : extendable}"
            placeholder="Vyhľadať..."
            @input="valueChange"
            @blur="handleBlur"
        >
    </div>
</template>

<script lang="ts">

    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class SearchBarComponent extends Vue {
        private timeout !: any;
        private extended = false;

        $refs!: {
            input: HTMLFormElement
        };

        @Prop()
        public extendable !: boolean;

        valueChange(event: any) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                this.timeout = undefined;
                this.$emit('valueChange', event.target.value);
            }, 250);
        }

        handleClick() {
            if (this.extendable && !this.extended) {
                this.extended = true;
            }
            this.$nextTick(() => {
                this.$refs.input.focus()
            })
        }

        handleBlur() {
            if (!this.$refs.input.value.trim()) {
                this.extended = false;
            }
        }
    }
</script>

<style scoped lang="scss">

    input::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    div.rounded-full,
    div.rounded-full input,
    div[extendable],
    div[extendable] input {
        @apply rounded-full;
    }
</style>
