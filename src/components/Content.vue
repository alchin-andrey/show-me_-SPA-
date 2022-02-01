<template>
<section class="content flex">
        <div class="container flex tile-s1">
            <router-view/>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Content',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {

    width: 100%;
}

.flex {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1 1 auto;
}

.tile-s1 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #1A1A1A;
}
</style>