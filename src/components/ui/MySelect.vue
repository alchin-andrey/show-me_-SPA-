<template>
    <div id="v-model-select-dynamic" class="flex">
        <label :for="way">{{label}}</label>
        <select :id="way" v-model="inputValue">
            <option v-for="item in options" :key="item" :value="item.value" :disabled="Boolean(item.disabled)">{{item.text}}</option>
        </select>
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
        options: {
            type: Array,
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

/* select {
    background: #FFFFFF;
    border: 1px solid #C5D3DB;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 149%;
    width: 50px;
    height: 40px;
} */


select {
    color: rgb(215, 215, 215);
    background-color: rgb(54, 54, 54);
    border-top: 5px solid rgb(215, 30, 60);
    border-bottom: 2px solid rgb(54, 54, 54);
    border-right: 2px solid rgb(54, 54, 54);
    border-left: 2px solid rgb(54, 54, 54);
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    height: 35px;
    padding:0 10px 0 10px;
}

::placeholder {
    color: rgb(180, 180, 180);
    font-size: 20px;
    text-align: center;
}

option {
    display: flex;
    align-items: center;
    justify-content: center;
    
}

</style>