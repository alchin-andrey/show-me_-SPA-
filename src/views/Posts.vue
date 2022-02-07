<template>
  <div>
    <div class="title">Страница постов</div>
    <div class="title-2">Количество постов: {{ $store.getters["posts/count"] }}</div>
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

</style>