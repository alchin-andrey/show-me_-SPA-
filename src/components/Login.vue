<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Войти</h1>
     <label>Логин</label>
     <input required v-model="email" type="email" placeholder="Логин"/>
     <label>Пароль</label>
     <input required v-model="password" type="password" placeholder="Пароль"/>
     <hr/>
     <button type="submit">Войти</button>
   </form>
 </div>
</template>

<script>
  export default {
    name: 'Login',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>