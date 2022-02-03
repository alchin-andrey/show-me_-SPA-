<template>
    <div class="register">
    <div class="title">Регистрация</div>
    <form class="flex-form" @submit.prevent>
        <div class="flex">
        <my-input
            label=""
            v-model="login"
            way="login"
            type="text"
            placeholder="Логин *"
            name="login"
            required="true"
            autofocus="true"
        />
        <my-input
            label=""
            v-model="email"
            way="email"
            type="text"
            placeholder="E-mail *"
            name="email"
            required="true"
        />

        <my-input
            label=""
            v-model="password"
            way="password"
            type="password"
            placeholder="Пароль *"
            name="password"
            required="true"
        />
        <my-input
            label=""
            v-model="password_confirmation"
            way="password_confirmation"
            type="password"
            placeholder="Повторите пароль *"
            name="password_confirmation"
            required="true"
        />
        </div>
            <my-button label="Регистрация" type="submit" @click="onRegisterClick"/>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
        login: "",
        email: "",
        password: "",
        password_confirmation: "",
        focus: true
        };
    },
    methods: {
        goTo(route) {
            this.$router.push(route);
        },
        onRegisterClick() {
            this.$store.dispatch("user/doCreate", {
                email: this.email,
                password: this.password,
            }).then((status) => {
                if (status === 'OK') {
                    this.$router.push('/my_series');
                } else if (status !== 'OK') {
                    alert('Ошибка регистрации');
                }
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.register {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.flex-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.title {
    font-size: 24px;
    font-weight: 600;
    padding: 5px;
}
</style>
