<template>
    <div class = "flex">
        <input type="checkbox" :id="way" v-model="inputValue" :name="name" :value="value" />
        <label :for="way">{{label}}</label>
    </div>
</template>

<script>
export default {
    name: "MyCheckbox",
    data () {
        return {
            inputValue: '',
        };
    },
    props: {
        modelValue: {
            type: Boolean,
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

/* input {
    background: #FFFFFF;
    border: 1px solid #C5D3DB;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 149%;
    width: 50px;
    height: 20px;
} */

.flex {
 display: flex;
 align-items: center;
 justify-content: center;
}


   input[type=checkbox] + label {
  display: block;
  margin: 0.1em;
  cursor: pointer;
  padding: 0.0em;
}

input[type=checkbox] {
  display: none;
}

input[type=checkbox] + label:before {
    content: "✔";
    border-top: 0.2em solid rgb(215, 30, 60);
    background-color: rgb(54, 54, 54);
    border-radius: 0.1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    padding-bottom: 0.1em;
    margin-right: 0.4em;
    color: transparent;
    transition: .2s;
}

input[type=checkbox] + label:active:before {
  transform: scale(0);
}

input[type=checkbox]:checked + label:before {
  background-color: rgb(255, 255, 255);
  border: 0.1em solid rgb(54, 54, 54);
  color: rgb(215, 30, 60);
}

input[type=checkbox]:disabled + label:before {
  transform: scale(1);
  border-color: #aaa;
}

input[type=checkbox]:checked:disabled + label:before {
  transform: scale(1);
  background-color: rgb(215, 30, 60);;
  border-color: rgb(215, 30, 60);;
}

</style>