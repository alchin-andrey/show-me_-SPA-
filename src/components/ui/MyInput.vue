<template>
    <div>
        <label :for="way">{{label}}</label>
        <input :id="way" v-model="inputValue" :type="type" :placeholder="placeholder" :name="name" :required="Boolean(required)" :autofocus="Boolean(autofocus)"/>
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
        required: {
            type: String,
            default: 'false',
        },
        autofocus: {
            type: String,
            default: 'false',
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
    width: 200px;
    height: 35px;
    padding:0 10px 0 10px;
    margin: 5px;
}

</style>
