<template>
<div>
          <div class="tile-news">{{newsTitle}}</div>
				<div class="foreword-news">{{newsForeword}}</div>
        <div class="img-title-news" v-if="!newsVideo"><img :src="newsImageTitle" alt=""></div>
        <div class="iframe_conteyner" v-else>
          <iframe width="100%" height="480" :src="newsVideo" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </div>
			<div class="text">
				<div class="text-news">{{newsData}}</div>
				<div class="text-news">{{newsDescription}}</div>
			</div>
    </div>
</template>

<script>
export default {
    name: 'PostsForm',
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
        newsData: '',
    };
    },
  //   computed: {
  //   postArray() {
  //     return this.$store.getters["posts/all"];
  //   },
  // },
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
        this.newsData = editPost?.data;
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-title-news img {
  width: 100%;
  border-radius: 30px;
  padding: 10px;
}

.img-title-news {
  width: 100%
}


.news-card {
  margin: 10px;

}

.main-tile {
    font-size: 28px;
    line-height: 20px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 10px;
}

.text {
    margin: 15px;
}

.video {
    margin: 15px;
    
    /* max-width: 900px; */

}

iframe {
  width: 70%;
}

.tile-news {
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;

    color: rgb(17, 65, 138);
    margin: 10px;
    
}

.foreword-news {
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
    color: #353535;
    margin: 10px;
}

.text-news {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    text-align: start;
    color: #353535;
    margin: 10px;
}

.iframe_conteyner {
    height: 0px;
    padding-bottom: 56.2%;
    position: relative;
    text-align: start;
}
.iframe_conteyner iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 30px 20px 20px 30px;
}
</style>