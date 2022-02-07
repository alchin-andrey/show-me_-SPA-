<template>
    <div class="about">
        <div class="title"></div>
        <div class="flex">
            <div class="login">{{$store.getters["user/userlogin"]}}</div>
            <div class="avatar image-wrap tape"><img :src="userAvatar()" alt=""></div>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            message: null,
        };
    },
    methods: {
        GoTo(route) {
            this.$router.push(route);
        },
        userAvatar() {
        return this.$store.getters["user/userAvatar"];
        },
    },
};

</script>

<style scoped>

/* .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    gap: 10px;
} */



.avatar img{
    width: 200px;
    height: 200px;
    border-radius: 15%;
    border: 5px initial rgb(109, 109, 109);
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login {
    font-size: 20px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: rgb(37, 43, 49);
}



</style>