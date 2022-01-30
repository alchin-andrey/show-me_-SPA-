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
            default: 'submit',
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btm_form {
    min-width: 120px;
    height: 33px;
    border: 2px solid rgba(0, 0, 0, 0.05);
    font-weight: 700;
    color: rgb(8, 7, 7);
    background-color: rgb(228, 108, 108);
    border-radius: 2px;
    margin: 10px;
    padding: 0 10px 0 10px;
}

.btm_form:hover {
    background-color: crimson;
}

</style>