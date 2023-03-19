<template>
     <div class="space-y-5 px-6">
        <div class="relative flex items-start" v-for="(standard, index) in standards" :key="index">
            <div class="flex h-6 items-center">
                <input
                    :id="standard.code"
                    :value="standard.code"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    @change="addStandard(standard)"
                    v-model="checkedStandards"
                />
            </div>
            <div class="ml-3 text-sm leading-6">
                <label :for="index" class="font-bold text-gray-900 cursor-pointer">{{ standard.code }}</label>
                <p class="text-gray-500">{{ standard.description }}</p>
            </div>
        </div>
     </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        props: ['standards'],
        computed: {
            ...mapState({
                selectedStandards: state => state.standards.items
            }),
            checkedStandards: {
                get: function () {
                    return this.selectedStandards.map(standard => standard.code)
                },
                set: function (newValue) {
                    //pass
                }
            },
        },
        methods: {
            async addStandard (NewStandard) {
                const standard = await this.$store.dispatch('standards/getItemFromStandards', NewStandard)
                if(standard){
                    this.$store.dispatch('standards/removeItemFromStandards', NewStandard)
                }
                if(!standard){
                    this.$store.dispatch('standards/addItemToStandards', NewStandard)
                }
            }
        }
    }
</script>
