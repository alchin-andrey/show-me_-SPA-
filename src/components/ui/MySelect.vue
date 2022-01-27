<template>
    <div>
        <label :for="way">{{label}}</label>
        <select :id="way" v-model="inputValue">
            <option v-for="option in options" :value="option.value"></option>
    </div>
</template>

<script>
export default {
    name: "MySelect",
    data () {
        return {
            inputValue: '',
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
        name: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: null,
        },
    },
    watch: {
        modelValue () {
            this.inputValue = this.modelValue;
        },
        inputValue () {
            this.$emit('update:modelValue', this.inputValue);
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