<template>
  <div>
    <div class="tile">Страница постов</div>
    <div class="tile-2">{{ $store.getters["posts/count"] }}</div>
    <div class="flex" v-for="post in postArray" :key="post.id">
        <router-link :to="`/post/${post.id}`">
            {{ post.id }}: {{ post.title }}
        </router-link>
        <my-button label="Х" type="button" @click="doDelete(post.id)"/>
    </div>
  </div>
</template>

<script>

export default {
    name: "Posts",
    computed: {
    postArray() {
      return this.$store.getters["posts/all"];
    },
  },
  methods: {
    doDelete (id) {
      this.$store.dispatch('posts/deletePost', id);
    }
  },
};
</script>


<style scoped>

/* .content {

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
} */

</style>