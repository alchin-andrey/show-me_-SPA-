<template>
<div>
    <h4>Регистрация</h4>
    <form @submit.prevent="register">
      <label for="name">Логин *</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="email" >E-Mail *</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>
      <label for="password">Пароль *</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>
      <label for="password-confirm">Повторите пароль *</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>
      <div>
          <button type="submit">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
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
</style>