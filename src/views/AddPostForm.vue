<template>
  <div>
    Создать пост
    <my-input
    label=""
    v-model="postText"
    way="postText"
    type="text"
    placeholder="Текст поста"
    name="postText"
    />
    <my-textarea
        label="" 
        v-model="postBody" 
        way="postBody" 
        placeholder="Новость" 
        name="postBody"
        rows="4"
    />
    <my-button label="Поститься" type="button" @click="onAdd"/>
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

/* .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    gap: 10px;
}

.tile {
    font-size: 25px;
    line-height: 20px;
    font-weight: 500;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #1A1A1A;
} */

</style>