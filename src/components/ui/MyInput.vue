<template>
    <div>
        <label :for="way">{{label}}</label>
        <input :id="way" v-model="inputValue" :type="type" :placeholder="placeholder" :name="name"/>
    </div>
</template>

<script>
export default {
    name: "MyInpyt",
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
            default: 'Наименование',
        },
        way: {
            type: String,
            default: 'id',
        },
        type: {
            type: String,
            default: 'Наименование',
        },
        placeholder: {
            type: String,
            default: 'Текст',
        },
        name: {
            type: String,
            default: 'name',
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
    width: 230px;
    height: 40px;
    margin-right: 30px;
    padding-left: 10px;
}

</style>