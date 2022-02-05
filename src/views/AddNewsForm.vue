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
            <my-select :options="newsСategory" v-model="selectedСategory" way="select" label="Категория новости"/>
            <my-button label="Запилить" type="button" @click="onAdd"/>
        </div>
</template>

<script>
export default {
    name: 'AddNewsForm',
    data() {
    return {
      newsTitle: '',
      newsForeword: '',
      newsImageTitle: '',
      newsDescription: '',
      selectedСategory: null,
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
  methods: {
    onAdd() {
      this.$store.dispatch("news/createPost", { 
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
    onUpdate () {
      this.$store.dispatch("news/updatePost", { 
        id: 1, 
        title: this.newsTitle, 
        foreword: this.newsForeword,
        description: this.newsDescription,
        image_title: this.newsImageTitle,
        category: this.selectedСategory,
        video: this.newsVideo,
        data: this.newsData,
        });
      this.$router.push("/news");
    }
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