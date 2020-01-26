<template>
    <div class="p-1" v-if="sample">

        <h1 class="text-2xl capitalized mb-4">
            {{ sample.name | capitalize }}
        </h1>

        <ui-label :item="{key:'id',value:sample.id}"/>

        <ui-label :item="{key:'používateľ',value:sample.user.login}"/>

        <ui-label
            :item="{
                key:'rozpúštadlo',
                value:sample.solvent.name,
                sidenote: (sample.own_solvent) ? 'vlastné' : undefined
            }
        "/>

        <ui-label
            :item="{
                key:'množstvo',
                value:sample.amount || 'neviem'
            }"
        />

        <!--  structure -->
        <div class="flex flex-col pb-3 w-full h-48">
            <label
                class="uppercase font-bold text-gray-500 text-sm block mb-2 w-1/3"
            >
                Štruktúra:
            </label>
            <div id="jsme" class="flex w-full h-full justify-center mx-auto"></div>
        </div>

        <ui-label :item="{key:'spektrometer',value:sample.spectrometer}"/>
        <ui-label :item="{key:'grant',value:sample.grant.name}"/>

        <ui-label
            :item="{key:'vrátiť vzorku',value:sample.return}"
            type="checkbox"
        />

        <ui-label :item="{key:'poznámka',value:sample.note}" :center="false"/>


        <div class="flex justify-end mt-3">
            <ui-button
                class="secondary rounded-full"
                @click="$store.dispatch('Modal/dismiss')"
                text="Zavrieť"
            />
            <router-link
                :to="`/samples/${sample.id}`"
            >
                <ui-button
                    class="ml-1 primary rounded-full"
                    text="Upraviť"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
    import UiButton from "../ui/UiButton";
    import UiLabel from "../ui/UiLabel";
    import UiCheckbox from "../ui/UiCheckbox";

    export default {
        name: "SampleModal",

        data: function () {
            return {
                jsmeApplet: undefined,
            }
        },

        props: {
            sample: {
                type: Object,
                required: true,
            }
        },

        components: {
            UiButton,
            UiLabel,
            UiCheckbox,
        },

        mounted() {
            this.jsmeApplet = new JSApplet.JSME("jsme", {
                options: "newlook,depict"
            });
            this.jsmeApplet.readMolFile(this.sample.structure);
        }
    }
</script>

<style scoped>

</style>
