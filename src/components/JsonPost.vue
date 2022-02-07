<template>
        <div>
            <div class="title">Количество постов: {{$store.getters['postsJs/count']}}</div>
            <div class="title-2">Из них избранные:</div>
            <div class="flex" v-for="post in postArray" :key="post.id">
                {{post.id}}: {{post.title}}
            </div>
            <div class="flex-c"><my-button label="Загрузить" type="button" @click="doLoadPosts"/></div>
        </div>
</template>

<script>
export default {
    name: 'JsonPost',
    computed: {
        postArray() {
            return this.$store.getters['postsJs/everyTen'];
        },
    },
        created() {
        this.$store.dispatch("postsJs/firstLoadPosts");
    },
    methods: {
        doLoadPosts() {
        this.$store.dispatch("postsJs/loadPosts");
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

</style>