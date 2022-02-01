<template>
    <div class="author">
    <form class="login">
        <div class="title">Войти</div>

        <my-input label="" v-model="email" way="email" type="text" placeholder="E-mail" name="email"/>

        <my-input label="" v-model="password" way="password" type="password" placeholder="Пароль" name="password"/>
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
            email: '',
            password: '',
        };
    },
    methods: {
        goTo(route) {
            this.$router.push(route);
        },
        onAuthClick() {
            this.$store.dispatch("user/doAuth", {
                email: this.email,
                password: this.password,
            }).then((status) => {
                if (status === 'OK') {
                    this.$router.push('/my_series');
                } else if (status !== 'OK') {
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
    font-size: 24px;
    font-weight: 600;
    padding: 5px;
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
    color: rgb(32, 104, 167);
    cursor: pointer;
    font-weight: 700;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.reg:hover {
    color: rgb(215, 30, 60);
}

/* .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
} */

</style>
