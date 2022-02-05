<template>
    <div id="v-model-radiobutton">
        <div v-for="item in options" :key="item" class = "flex">
            <input type="radio" :id="item.name" v-model="picked" :name="item.name" :value="item.label" />
            <label :for="item.name">{{item.label}}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyRadioArr",
    data () {
        return {
            picked: '',
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


   input[type=radio] + label {
  display: block;
  margin: 0.1em;
  cursor: pointer;
  padding: 0.0em;
}

input[type=radio] {
  display: none;
}

input[type=radio] + label:before {
    content: "•";
    border: 0.1em solid rgb(54, 54, 54);
    background-color: rgb(54, 54, 54);
    border-radius: 50%;
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

input[type=radio] + label:active:before {
  transform: scale(0);
}

input[type=radio]:checked + label:before {
  background-color: rgb(255, 255, 255);
  border: 0.1em solid rgb(54, 54, 54);
  color: rgb(215, 30, 60);

}

input[type=radio]:disabled + label:before {
  transform: scale(1);
  border-color: #aaa;
}

input[type=radio]:checked:disabled + label:before {
  transform: scale(1);
  background-color: rgb(215, 30, 60);;
  border-color: rgb(215, 30, 60);;
}

</style>