<template>
  <div class="about">
    <Posts/>
    <PostsForm/>
  </div>
</template>

<script>

import Posts from "@/components/Posts.vue";
import PostsForm from "@/components/PostsForm.vue";

export default {
    name: "Favorites",
    components: {
        Posts,
        PostsForm,
    },
};

</script>
