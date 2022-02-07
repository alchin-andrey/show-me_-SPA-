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
    // watch: {
    //     modelValue () {
    //         this.inputValue = this.modelValue;
    //     },
    //     inputValue () {
    //         this.$emit('update:modelValue', this.inputValue);
    //     },
    // },
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

<style scoped>

input {
    color: rgb(215, 215, 215);
    background-color: rgb(54, 54, 54);
    border-top: 5px solid rgb(215, 30, 60);
    border-bottom: 2px solid rgb(54, 54, 54);
    border-right: 2px solid rgb(54, 54, 54);
    border-left: 2px solid rgb(54, 54, 54);
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    width: 100%;
    min-width: 200px;
    height: 35px;
    padding:0 10px 0 10px;
}

::placeholder {
    color: rgb(180, 180, 180);
    font-size: 20px;
    text-align: center;
}

</style>
