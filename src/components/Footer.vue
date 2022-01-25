<template>
<footer class="footer">
        <div class="container">
            <div class="footer__flex">
                <div class="logo" @click="GoTo('home')"><img class="logo" alt="logo" src="@/assets/logo-max.png"></div>
                <nav class="menu-wrapper">
                    <ul class="menu">
                        <li class="home"><a href="#">сериалы</a></li>
                        <li class="active"><a href="#">новости</a></li>
                        <li><a href="#">рейтинги</a></li>
                        <li><a href="#">сообщество</a></li>
                        <li><a href="#">контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
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
.footer {
    background-color: rgb(55, 55, 55);
}

.logo {
    width: 80px;
}

.footer__flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 11px 50px 11px 87px;
}

.menu-wrapper {
    padding-bottom: 6px;
    margin-top: 10px;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    padding-top: 6px;
    justify-content: space-evenly;
}

.menu li {
    margin: 0 25px 0 0;
}

@media (max-width: 920px) {
    .menu li {
        margin: 15px 10px 0 10px;
    }
}

.menu a {
    font-family: 'ReformaGroteskMediumC', sans-serif;
    font-size: 21px;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    color: #FFFFFF;
}

.menu a:hover {
    position: relative;
}

.menu a:hover::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 2px;
    bottom: -8px;
    left: calc(50% - 50px);
    background: linear-gradient(146.05deg, #ff3c00 0%, #FF6600 77.54%);
    border-radius: 50px;
}

</style>