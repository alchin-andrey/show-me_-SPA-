<template>
        <button class="btm_form" type="type">{{label}}</button>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        label: {
            type: String,
            default: 'Наименование',
        },
        type: {
            type: String,
            default: 'button',
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btm_form {
    min-width: 30px;
    height: 30px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    margin: 5px;
    padding: 0 10px 0 10px;
    background-color: rgb(35, 75, 110);
    border: 3px solid rgb(35, 75, 110);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.btm_form:hover {
    background-color: rgb(255, 255, 255);
    border: 3px solid rgb(32, 32, 32);
    color: rgb(0, 0, 0);
}

.btm_form:active {
    background-color: rgb(215, 30, 60);
    border: 3px solid rgb(215, 30, 60);
    color: rgb(255, 255, 255);
}

</style>


