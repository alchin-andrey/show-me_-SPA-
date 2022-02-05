<template>
        <div>
            <div>Создать новость</div>
            <my-input
                label=""
                v-model="newsTitle"
                way="newsTitle"
                type="text"
                placeholder="Заголовок новости"
                name="newsTitle"
            />
            <my-input
                label=""
                v-model="newsForeword"
                way="newsForeword"
                type="text"
                placeholder="Предисловие новости"
                name="newsForeword"
            />
            <my-input
                label=""
                v-model="newsImageTitle"
                way="newsImageTitle"
                type="text"
                placeholder="URL Изображения"
                name="newsImageTitle"
            />
            <my-input
                label=""
                v-model="newsVideo"
                way="newsVideo"
                type="text"
                placeholder="URL Видио"
                name="newsVideo"
            />
            <my-textarea
                label="" 
                v-model="newsDescription" 
                way="newsDescription" 
                placeholder="Текст новости" 
                name="newsDescription"
                rows="8"
            />
            
            <my-select :options="newsСategory" v-model="selected" way="select" label="Категория новости"/>
            <my-button label="Запилить" type="button" @click="onUpdate"/>
        </div>
</template>

<script>
export default {
    name: 'NewsEdit',
    data() {
    return {
        newsId: '',
        newsTitle: "",
        newsForeword: "",
        newsImageTitle: "",
        newsDescription: "",
        selected: null,
        newsСategory: [ 
                {
                text: 'Анонсы',
                value: 'Анонсы',
                },
                {
                text: 'Рецензии',
                value: 'Рецензии',
                },
                {
                text: 'Трейлеры',
                value: 'Трейлеры',
                },
                {
                text: 'Статьи',
                value: 'Статьи',
                },
            ],
        newsVideo:'',
        newsData: new Date().toLocaleString(),
    };
    },
    created() {
        const id = this.$route.params.id;
        const postById = this.$store.getters["news/newsById"];
        const editPost = postById(id);
        this.newsId = editPost?.id;
        this.newsTitle = editPost?.title;
        this.newsForeword = editPost?.foreword;
        this.newsDescription = editPost?.description;
        this.newsImageTitle = editPost?.image_title;
        this.newsСategory = editPost?.category;
        this.newsVideo = editPost?.video;
    },
    methods: {
        onUpdate() {
        this.$store.dispatch("news/updatePost", {
            id: this.newsId,
            title: this.newsTitle, 
            foreword: this.newsForeword,
            description: this.newsDescription,
            image_title: this.newsImageTitle,
            category: this.newsСategory,
            video: this.newsVideo,
            // data: this.newsData,
        });
        this.$router.push("/news");
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