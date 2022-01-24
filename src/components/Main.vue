<template>
    <section class="main">
        <div class="container">
            <div class="main_flex">
                <Sidebar />
                <Content />
            </div>
        </div>
    </section>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'Main',
  components: {
    Sidebar,
    Content,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    background-color: rgb(235, 223, 223);
    min-height: 600px;
}

.main_flex {
    display: flex;
    justify-content: center;
    background-color: rgb(255, 255, 255);
}

</style>