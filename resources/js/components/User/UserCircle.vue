<template>
    <div
        class="rounded-full text-white bg-yellow-500 w-10 h-10 flex justify-center items-center">
        {{ userCircle }}
    </div>
</template>

<script>
    export default {
        name: "UserCircle",

        props: {
            name: {
                type: String,
                required: true,
            }
        },

        computed: {
            userCircle: function () {
                return this.name.split(' ').map(str => str[0]).join('').toUpperCase();
            }
        }
    }
</script>
