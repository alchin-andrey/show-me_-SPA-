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
    width: 120px;
    height: 40px;
    border: 2px solid rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(39, 38, 38);
    background-color: rgb(228, 108, 108);
    border-radius: 10px;
}

.btm_form:hover {
    background-color: crimson;
}

</style>