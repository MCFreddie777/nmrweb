<template>
    <div class="bg-white rounded py-2 px-4 flex items-center w-1/5 md:w-1/3 sm:w-1/2">

        <i class="fas fa-search text-gray-500 pr-2"/>
        <input
            type="search"
            class="focus:outline-none w-full"
            placeholder="Vyhľadať..."
            @input="valueChange"
        >

    </div>
</template>

<script>
    export default {
        name: "SearchBar",

        data: () => ({
            timeout: undefined,
        }),

        methods: {
            valueChange(event) {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(() => {
                    this.$emit('valueChange', event.target.value);
                    this.timeout = undefined;
                }, 1000);
            },
        }
    }
</script>

<style scoped>

</style>
