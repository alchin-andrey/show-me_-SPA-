<template>
    <div>
        <input type="radio" :id="way" v-model="inputValue" :name="name" :value="value" />
        <label :for="way">{{label}}</label>
    </div>
</template>

<script>
export default {
    name: "MyRadio",
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
    modelValue: {
        handler() {
            this.inputValue = this.modelValue;
        },
        immediate: true,
        },
        inputValue: {
        handler() {
            this.$emit("update:modelValue", this.inputValue);
        },
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