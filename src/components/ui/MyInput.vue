<template>
    <div>
        <label :for="way">{{label}}</label>
        <input :id="way" v-model="inputValue" :type="type" :placeholder="placeholder" :name="name" :required="required" :autofocus="autofocus"/>
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
            type: Boolean,
            default: false,
        },
        autofocus: {
            type: Boolean,
            default: false,
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
    color: rgb(255, 255, 255);
    background-color: rgb(54, 54, 54);
    border-top: 5px solid rgb(215, 30, 60);
    border-bottom: 2px solid rgb(54, 54, 54);
    border-right: 2px solid rgb(54, 54, 54);
    border-left: 2px solid rgb(54, 54, 54);
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    max-width: 200px;
    height: 35px;
    padding:0 10px 0 10px;
    margin: 5px;
}

::placeholder {
    color: rgb(202, 203, 204);
    text-align: center;
}

</style>
