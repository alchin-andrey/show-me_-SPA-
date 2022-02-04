<template>
  <div class="about">
    <JsonPost/>
    <JsonPostsForm/>
  </div>
</template>

<script>

import JsonPost from "@/components/JsonPost.vue";
import JsonPostsForm from "@/components/JsonPostsForm.vue";

export default {
    name: "Favorites",
    components: {
        JsonPost,
        JsonPostsForm,
    },
};
</script>
