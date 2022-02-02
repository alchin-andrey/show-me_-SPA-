<template>
        <div>
            <my-textarea
                label="" 
                v-model="message" 
                way="message" 
                placeholder="Ваше сообщение" 
                name="message"
                rows="4"
            />
            <my-button label="Поститься" type="button" @click="onAdd"/>
        </div>
</template>

<script>
export default {
    name: 'PostsForm',
    data () {
        return {
            message: '',
        };
    },
    methods: {
        onAdd() {
        this.$store.dispatch("posts/createPost", { title: this.message });
        this.message = '';
        },
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