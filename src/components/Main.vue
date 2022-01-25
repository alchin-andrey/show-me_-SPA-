<template>
    <section class="main">
        <div class="container flex">
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
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}

.flex {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1 1 auto;
}

.main_flex {
    display: flex;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    flex: 1 1 auto;
}

</style>