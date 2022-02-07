<template>
    <div class = "flex">
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

textarea {
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
    padding:0 10px 0 10px;
}

::placeholder {
    color: rgb(180, 180, 180);
    font-size: 20px;
    padding: 10px;
    text-align: center;
}

</style>