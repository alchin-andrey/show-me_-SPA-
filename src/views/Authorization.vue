<template>
    <div class="author">
    <form class="login" @submit.prevent="login">
        <div class="title">Войти</div>

        <my-input label="" v-model="login" way="login" type="text" placeholder="Ваш логин" name="login"/>

        <my-input label="" v-model="password" way="password" type="password" placeholder="Ваш пароль" name="password"/>
            <my-button label="Войти" type="submit" @click="onAuthClick"/>
        <hr/>
        <div>
        <div>Или зарегестрируйтесь:</div>
        <div class="reg" @click="goTo('/register')">Регистрация</div>
        </div>

    </form>
    </div>
</template>

<script>

// import {isAuth} from '@/App.vue';

export default {
    data () {
        return {
            login: '',
            password: '',
        };
    },
    methods: {
        goTo(route) {
            this.$router.push(route);
        },
        onAuthClick() {
            this.$store.dispatch("user/doAuth", {
                login: this.login,
                password: this.password,
            }).then((status) => {
                if (status === 'OK') {
                    this.$router.push('/my_series');
                } else if (status === 'error') {
                    alert('Ошибка авторизации');
                }
            });
        },
    },
    
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
    font-size: 22px;
    padding: 10px;
}

.author {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}


.reg {
    color: rgb(64, 80, 221);
    cursor: pointer;
}
.reg:hover {
    color: rgb(221, 135, 64);

}

/* .flex {
    display: flex;
    align-items: center;
    justify-content: center;
} */

</style>
