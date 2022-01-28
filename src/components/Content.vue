<template>
<section class="content">
        <div class="container">
            <div class="tile-s1"><router-view/></div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.tile-s1 {
    font-size: 25px;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 0.07em;
    color: #1A1A1A;
    text-align: center;
    padding-top: 10px;
    margin-bottom: 10px;
}
</style>