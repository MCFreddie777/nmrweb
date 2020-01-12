<template>
    <div class="p-1" v-if="$data._user">

        <h1 class="text-2xl capitalized mb-4">
            {{ capitalize($data._user.login) }}
        </h1>

        <div class="flex items-center pb-3">
            <label
                class="uppercase font-bold text-gray-500 text-sm block w-1/4"
                for="password"
            >
                Heslo:
            </label>
            <ui-input
                class="w-3/4"
                type="password"
                name="password"
                placeholder="••••••••"
            />
        </div>


        <div
            v-for="key in Object.keys($data._user).slice(2,5)"
        >
            <div class="flex items-center pb-3">
                <label
                    :for="key"
                    class="uppercase font-bold text-gray-500 text-sm w-1/4"
                >
                    {{ key }}
                </label>
                <ui-checkbox
                    class="w-3/4"
                    name="local_dir"
                    :checked="!!$data._user[key]"
                    @updateField="value => updateUserField(key,+value)"
                />
            </div>
        </div>
        <div class="flex justify-end">
            <button
                class="border border-gray-600 text-gray-600 hover:bg-gray-200"
                @click="$store.dispatch('Modal/dismiss')"
            >
                Cancel
            </button>
            <button
                @click="save"
                class="ml-1 bg-yellow-500 text-white hover:bg-yellow-400"
            >
                Save
            </button>
        </div>
    </div>
</template>

<script>
    import UiInput from "../ui/UiInput";
    import helpers from '../../helpers';
    import UiCheckbox from "../ui/UiCheckbox";

    export default {
        name: "UserEditModal",

        data: () => ({
            _user: undefined,
        }),

        props: {
            user: {
                type: Object,
                required: true,
            }
        },

        components: {
            UiInput,
            UiCheckbox
        },

        methods: {
            capitalize: helpers.capitalize,

            updateUserField(key, value) {
                this.$data._user[key] = value;
                this.$forceUpdate();
            },

            save() {
                this.$store.dispatch(
                    'App/updateUser',
                    this.$data._user
                );
                this.$store.dispatch('Modal/dismiss');
            }
        },

        mounted() {
            // Clone the object for vuex mutations
            this.$data._user = {};
            Object.assign(this.$data._user, this.user);
        }

    }
</script>

<style scoped lang="scss">
    button {
        @apply rounded px-2 py-1 w-16;
        &:focus {
            @apply outline-none;
        }
    }
</style>
