<template>
    <header class="header">
        <div class="container">
            <div class="header-flex">
                <div class="logo" @click="goTo('/')"><img class="logo" alt="logo" src="@/assets/img/logo_3.svg"></div>
                <nav class="menu-wrapper">
                    <div class="menu cur-point" @click="goTo('/series_catalog')" :class="{active: activePath === '/series_catalog'}">Сериалы</div>
                    <div class="menu cur-point" @click="goTo('/news')" :class="{active: activePath === '/news'}">Новости</div>
                </nav>
                <div class="login-flex cur-point" @click="showDialog" v-if="$store.getters['user/isAuth']">
                    <div class="login-img"><img class="logo" alt="logo" :src="userAvatar()"></div>
                    <div class="login-title cur-point">{{$store.getters['user/userlogin']}}</div>
                </div>
                <div class="login-flex cur-point" @click="goTo('/authorization')" v-else >
                    <div class="login-img"><img class="logo" alt="logo" src="@/assets/img/anonim.svg"></div>
                    <div class="login-title cur-point" :class="{login_active: activePath === '/login'}">Войти</div>
                </div>
            </div>
        </div>
        <my-dialog ref="dialog">
                    <template #header>Задумайтесь!</template>
                    <template #body>Вы уверены что хотите выйти?</template>
                    <template #footer>
                        <my-button 
                    class="modal-default-button" 
                    label="Да, абсолютли!" 
                    type="button" 
                    @click="doLogout"/>
                    <my-button
                    class="modal-default-button"
                    label="Ноуп" 
                    type="button" 
                    @click="stopDialog"/>
                    </template>
                </my-dialog>
    </header>


</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            activePath: "/",
        };
    },
    watch: {
        $route() {
            this.activePath = this.$route.path;
        },
    },
    methods: {
        goTo(route) {
            this.$router.push(route);
        },
        showDialog() {
            this.$refs.dialog.show();
        },
        stopDialog() {
            this.$refs.dialog.shown = false;
        },
        doLogout () {
            this.$store.dispatch('user/logout');
            this.$router.push('/');
            this.stopDialog()
        },
        userAvatar() {
        return this.$store.getters["user/userAvatar"];
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
    background-color: rgb(37, 43, 49);
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid rgb(215, 30, 60);
}

.logo {
    width: 120px;
    cursor: pointer;
}

.header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-wrapper {
    padding-bottom: 6px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    padding-top: 6px;
    justify-content: center;
    align-items: center;
}

.menu {
    margin: 0 35px 0 35px;
}

@media (max-width: 920px) {
    .menu {
        margin: 15px 10px 0 10px;
    }
}

.menu {
    font-family: 'ReformaGroteskMediumC', sans-serif;
    font-size: 21px;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    color: #FFFFFF;
    position: relative;
}

.cur-point {
    cursor: pointer;
}

.menu:hover::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    bottom: -8px;
    left: calc(50% - 25px);
    background: rgb(215, 30, 60);
    border-radius: 50px;
}

.active:before {
    content: '';
    position: absolute;
    width: 200px;
    height: 3px;
    bottom: -8px;
    left: calc(50% - 100px);
    background: rgb(215, 30, 60);
    border-radius: 50px;
}

.login-title {
    font-family: 'ReformaGroteskMediumC', sans-serif;
    font-size: 15px;
    line-height: 100%;
    font-weight: 500;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    color: #FFFFFF;
}

.login-flex {
    display: flex;
    align-items: center;
}

.login-img {
    width: 50px;
    height: 50px;
    background-color: rgb(223, 223, 223);
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-bottom: 2px solid rgb(0, 0, 0);
}

.login-img img {
    width: 50px;
    border-radius: 30%;
}

.login-flex:hover .login-title {
    color: red;
}

.login_active {
    color: red;
}
</style>