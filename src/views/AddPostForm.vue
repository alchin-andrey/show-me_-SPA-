<template>
  <div>
    <div class="title">Создать пост</div>
    <div class="gap">
      <my-input
      label=""
      v-model="postText"
      way="postText"
      type="text"
      placeholder="Заголовок поста"
      name="postText"
      />
      <my-textarea
          label="" 
          v-model="postBody" 
          way="postBody" 
          placeholder="Тело поста" 
          name="postBody"
          rows="4"
      />
    </div>
    <div class="flex-r"><my-button label="Поститься" type="button" @click="onAdd"/></div>
  </div>
</template>

<script>

export default {
    name: "AddPostForm",
    data() {
    return {
      postText: '',
      postBody: '',
    };
  },
  methods: {
    onAdd() {
      this.$store.dispatch("posts/createPost", { title: this.postText, body: this.postBody });
      this.$router.push("/posts");
    },
    onUpdate () {
      this.$store.dispatch("posts/updatePost", { id: 1, title: this.postText, body: this.postBody });
      this.$router.push("/posts");
    }
  },
};

</script>


<style scoped>

.gap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 10px;
}

</style>