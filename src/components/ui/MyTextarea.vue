<template>
    <div>
        <label :for="way">{{label}}</label>
        <textarea :id="way" v-model="inputValue" :placeholder="placeholder" :name="name" :rows="Number(rows)"></textarea>
    </div>
</template>

<script>
export default {
    name: "MyTextarea",
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
        placeholder: {
            type: String,
            default: 'Текст',
        },
        name: {
            type: String,
            default: 'name',
        },
        rows: {
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

textarea {
    background: #FFFFFF;
    border: 1px solid #C5D3DB;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 149%;
    width: 230px;
    margin-right: 30px;
    padding-left: 10px;
}

</style>