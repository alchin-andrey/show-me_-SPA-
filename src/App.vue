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

export default {
    name: "App",
    components: {
        Header,
        Main,
        Footer,
    },
};
</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    height: 100%;
}

.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 25px;
    line-height: 25px;
    margin: 20px 10px 20px 10px;
    text-align: center;
}

.title-2 {
    font-size: 20px;
    line-height: 25px;
    margin: 10px;
    text-align: center;
}

.mrg {
margin: 15px;
}

.pd {
    padding: 10px;
}

.flex-c {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-r {
    display: flex;
    justify-content: end;
    align-items: center;
}

</style>
