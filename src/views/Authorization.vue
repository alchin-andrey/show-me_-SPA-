<template>
    <div>
    <form class="login" @submit.prevent="login">
        <div>Войти</div>

        <my-input label="Логин" v-model="login" way="login" type="text" placeholder="Ваш логин" name="login"/>

        <my-input label="Пароль" v-model="password" way="password" type="password" placeholder="Ваш пароль" name="password"/>
        <div class="flex">
            <my-button label="Войти" type="submit"/>
        </div>
        <hr/>
        <div>
        <div>Или зарегестрируйтесь:</div>
        <div class="reg" @click="$router.push('/register')">Регистрация</div>
        </div>

    </form>
    </div>
</template>

<script>

export default {
    data () {
        return {
            login: '',
            password: '',
        };
    },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.reg {
    color: rgb(64, 80, 221);
    cursor: pointer;
}
.reg:hover {
    color: rgb(221, 135, 64);
    
}

.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>