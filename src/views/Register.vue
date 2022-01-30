<template>
    <div class="register">
    <div class="title">Регистрация</div>
    <form @submit.prevent="register" class="flex-form">
        <div class="flex">
        <my-input
            label="Логин *"
            v-model="login"
            way="login"
            type="text"
            placeholder="Ваш логин"
            name="login"
            required="true"
            autofocus="true"
        />
        <my-input
            label="E-mail *"
            v-model="email"
            way="email"
            type="text"
            placeholder="Ваш e-mail"
            name="email"
            required="true"
        />

        <my-input
            label="Пароль *"
            v-model="password"
            way="password"
            type="password"
            placeholder="Ваш пароль"
            name="password"
            required="true"
        />
        <my-input
            label="Повторите пароль *"
            v-model="password_confirmation"
            way="password_confirmation"
            type="password"
            placeholder="Ваш пароль"
            name="password_confirmation"
            required="true"
        />
        </div>
            <my-button label="Регистрация" type="submit" />
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

.flex {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

.title {
    font-size: 22px;
    padding: 10px;
}
</style>
