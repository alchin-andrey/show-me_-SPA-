<template>
    <div class="menu_item">
        <div class="box">
            <div class="sidebar__img"><img :src="getImage(icon)" :alt="alt"></div>
            <div class="sidebar__text">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavButton',
    data () {
        return {
            activePath: "/",
        };
    },
    props: {
        icon: {
            type: String,
            default: null,
        },
        alt: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
    },
    
    watch: {
        $route() {
            this.activePath = this.$route.path;
        },
    },
    methods: {
        getImage(name) {
            return require(`@/assets/img/icon/${name}`);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu_item {
    font-family: "ReformaGroteskMediumC", sans-serif;
    font-size: 12px;
    line-height: 100%;
    font-weight: 500;
    letter-spacing: 0.105em;
    color: #000000;
    cursor: pointer;
}

.box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.box:hover {
    color: crimson;
}

</style>