<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Войти</h1>
     <label>Логин</label>
     <input required v-model="email" type="email" placeholder="Логин"/>
     <label>Пароль</label>
     <input required v-model="password" type="password" placeholder="Пароль"/>
     <button type="submit">Войти</button>
     <hr/>
     <div>
       <div>Или зарегестрируйтесь:</div>
       <div class="reg" @click="$router.push('/register')">Регистрация</div>
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

.reg {
  color: rgb(64, 80, 221);
  cursor: pointer;
}
.reg:hover {
  color: rgb(221, 135, 64);
  
}

</style>