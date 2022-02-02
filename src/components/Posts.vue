<template>
        <div>
            <div class="tile">Количество постов: {{$store.getters['posts/count']}}</div>
            <div class="tile-2">Из них избранные:</div>
            <div class="flex" v-for="post in postArray" :key="post.id">
                {{post.id}}: {{post.title}}
            </div>
            <my-button label="Загрузить" type="button" @click="doLoadPosts"/>
        </div>
</template>

<script>
export default {
    name: 'Posts',
    computed: {
        postArray() {
            return this.$store.getters['posts/everyTen'];
        },
    },
        created() {
        this.$store.dispatch("posts/firstLoadPosts");
    },
    methods: {
        doLoadPosts() {
        this.$store.dispatch("posts/loadPosts");
    },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {

    width: 100%;
}

.flex {
    display: flex;
    margin: 10px;
}

.tile {
    font-size: 25px;
    line-height: 25px;
    margin: 10px;
}

.tile-2 {
    font-size: 20px;
    line-height: 25px;
    margin: 10px;
}
</style>