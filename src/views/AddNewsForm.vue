<template>
        <div>
            <div class="title">Создать новость</div>
            
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
            <div class="flex-r mrg"><my-button label="Запилить" type="button" @click="onAdd"/></div>
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