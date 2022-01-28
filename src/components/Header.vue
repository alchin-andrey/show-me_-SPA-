<template>
    <header class="header">
        <div class="container">
            <div class="header-flex">
                <div class="logo" @click="GoTo('/')"><img class="logo" alt="logo" src="@/assets/img/logo.svg"></div>
                <nav class="menu-wrapper">
                    <div class="menu cur-point" @click="GoTo('/series_catalog')" :class="{active: activePath === '/series_catalog'}">Каталог сериалов</div>
                </nav>
                <div class="login-flex cur-point" @click="GoTo('/authorization')">
                    <div class="login-img"><img class="logo" alt="logo" src="@/assets/img/anonim2.svg"></div>
                    <div class="login-title cur-point" :class="{login_active: activePath === '/login'}">Войти</div>
                </div>
            </div>
        </div>
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
        GoTo(route) {
            this.$router.push(route);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
    background-color: rgb(55, 55, 55);
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid rgb(209, 18, 18);
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
}

.menu {
    margin: 0 25px 0 0;
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
    width: 100px;
    height: 2px;
    bottom: -8px;
    left: calc(50% - 50px);
    background: linear-gradient(146.05deg, #ff3c00 0%, #FF6600 77.54%);
    border-radius: 50px;
}

.active:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 2px;
    bottom: -8px;
    left: calc(50% - 50px);
    background: linear-gradient(146.05deg, #ff3c00 0%, #FF6600 77.54%);
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
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.login-img img {
    width: 50px;
}

.login-flex:hover .login-title {
    color: red;
}

.login_active {
    color: red;
}
</style>