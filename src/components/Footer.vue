<template>
<footer class="footer">
        <div class="container">
            <div class="footer__flex">
                <div class="logo" @click="GoTo('/')"><img class="logo" alt="logo" src="@/assets/img/logo.svg"></div>
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
    background-color: rgb(37, 43, 49);
    border-top: 5px solid rgb(215, 30, 60);
}

.logo {
    width: 120px;
    cursor: pointer;
}

.footer__flex {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

</style>