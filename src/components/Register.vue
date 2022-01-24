<template>
<div>
    <h4>Регистрация</h4>
    <form @submit.prevent="register">
      <label for="name">Логин</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="email" >E-Mail</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>
      <label for="password">Пароль</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>
      <label for="password-confirm">Повторите пароль</label>
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
 export default {
   name: 'Register',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>