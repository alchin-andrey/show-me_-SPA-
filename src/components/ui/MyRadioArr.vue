<template>
    <div id="v-model-radiobutton">
        <div v-for="item in options" :key="item">
            <input type="radio" :id="item.name" v-model="picked" :name="item.name" :value="item.label" />
            <label :for="item.name">{{item.label}}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyRadioArr",
    data () {
        return {
            picked: '',
        };
    },
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: null,
        },
        way: {
            type: String,
            default: 'id',
        },
        options: {
            type: Array,
            default: null,
        },
    },
    watch: {
        modelValue () {
            this.picked = this.modelValue;
        },
        picked () {
            this.$emit('update:modelValue', this.picked);
        },
    },
};
    
</script>

    

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
    background: #FFFFFF;
    border: 1px solid #C5D3DB;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 149%;
    width: 50px;
    height: 20px;
}

</style>