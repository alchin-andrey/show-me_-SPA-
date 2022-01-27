<template>
<div>
    <h4>Регистрация</h4>
    <form @submit.prevent="register">
        <my-input label="Логин *" v-model="login" way="login" type="text" placeholder="Ваш логин" name="login"/>
        <my-input label="E-mail *" v-model="email" way="email" type="text" placeholder="Ваш e-mail" name="email"/>

        <my-input label="Пароль *" v-model="password" way="password" type="password" placeholder="Ваш пароль" name="password"/>
        <my-input label="Повторите пароль *" v-model="password_confirmation" way="password_confirmation" type="password" placeholder="Ваш пароль" name="password_confirmation"/>
        <div class="flex">
            <my-button label="Войти" type="submit"/>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    data () {
        return {
            login: '',
            email: '',
            password: '',
            password_confirmation:'',
        };
    },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    background: #FFFFFF;
    border: 1px solid #C5D3DB;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 149%;
    /* or 24px */
    width: 230px;
    height: 40px;
    margin-right: 30px;
    padding-left: 10px;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>