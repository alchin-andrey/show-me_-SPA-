<template>
        <div>
            <div class="title">Редактировать новость</div>
            <div class="flex">
            <div class="input-gap">
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
            </div>
            <div class="mar">
                <my-select :options="newsСategory" v-model="selectedСategory" way="select" label=""/>
            </div>
            </div>
            <my-textarea
                label="" 
                v-model="newsDescription" 
                way="newsDescription" 
                placeholder="Текст новости" 
                name="newsDescription"
                rows="8"
            />
            <div class="flex-r mrg"><my-button label="Запилить" type="button" @click="onUpdate"/></div>
        </div>
</template>

<script>
export default {
    name: 'NewsEdit',
    data() {
    return {
        newsId: '',
        newsTitle: '',
        newsForeword: '',
        newsImageTitle: '',
        newsDescription: '',
        selectedСategory: '',
        newsСategory: [ 
                {
                text: 'Категория новости',
                value: '',
                disabled: true,
                },
                {
                text: 'Анонсы',
                value: 'Анонсы',
                disabled: false,
                },
                {
                text: 'Рецензии',
                value: 'Рецензии',
                disabled: false,
                },
                {
                text: 'Трейлеры',
                value: 'Трейлеры',
                disabled: false,
                },
                {
                text: 'Статьи',
                value: 'Статьи',
                disabled: false,
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
        this.selectedСategory = editPost?.category;
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
            category: this.selectedСategory,
            video: this.newsVideo,
            data: this.newsData,
        });
        this.$router.push("/news");
        },
    },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-gap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
  margin-right: 20px;
}

.flex{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}


</style>