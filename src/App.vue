<template>
    <div class="wrapper">     
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

const isAuth = false;

export default {
    name: "App",
        components: {
        Header,
        Main,
        Footer,
        isAuth
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}



.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

</style>
