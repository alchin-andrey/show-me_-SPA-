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
    name: 'PostsForm',
    data() {
    return {
      postText: "",
      postBody: "",
    };
  },
  created() {
    const id = this.$route.params.id;
    const postById = this.$store.getters["posts/postById"];
    const editPost = postById(id);
    this.postText = editPost.title;
    this.postBody = editPost.body;
  },
  methods: {
    onUpdate() {},
  },
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