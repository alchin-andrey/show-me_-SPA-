<template>
<div>
    <div class="main-tile">Новости</div>
    <my-button label="Создать новость" type="button" @click="goTo('/add_news')"/>
    <div class="tile-2">Количество новостей: {{ $store.getters["news/count"] }}</div>
    <div class="flex" v-for="post in newsArray" :key="post.id">
        <router-link class="flex-grow" :to="`/news_form/${post.id}`">
        <div class="news-card">
        <div class="img-title-news"><img :src="post.image_title" alt=""></div>
			<div class="text">
				<div class="tile-news">{{ post.title }}</div>
				<div class="foreword-news">{{ post.data }}</div>
				<div class="foreword-news">{{ post.foreword }}</div>
			</div>
        </div>
        <hr>
        </router-link>
		<my-button label="/" type="button" @click="goTo(`/news_edit/${post.id}`)"/>
		<!-- <my-button label="Х" type="button" @click="doDelete(post.id)"/> -->
		
		<my-button label="Х" type="button" @click="showDialog(post.id)"/>
    
    </div>
	<my-dialog ref="dialog">
		<template #header>Так-так-так</template>
		<template #body>Ты удумал удалить новость?</template>
		<template #footer>
			<my-button 
				label="Да, абсолютли!" 
				type="button" 
				@click="doDelete(idForDelete)"/>
			<my-button
				label="Ноуп" 
				type="button" 
				@click="stopDialog"/>
		</template>
	</my-dialog>
</div>
</template>

<script>

export default {
    name: "News",
    data () {
      return {
        idForDelete: '',
      }
    },
    computed: {
    newsArray() {
		return this.$store.getters["news/all"];
		},
	},
	methods: {
		doDelete (id) {
		this.$store.dispatch('news/deletePost', id);
    this.stopDialog()
		},
		getImage(name) {
				return require(`${name}`);
			},
		goTo(route) {
				this.$router.push(route);
			},
		showDialog(id) {
      this.idForDelete = id;
			this.$refs.dialog.show();
		},
		stopDialog() {
          this.idForDelete = '';
            this.$refs.dialog.shown = false;
        },
	},
};
</script>

<style scoped>

.flex {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 30px 10px 10px;
    gap: 10px;
	 width: 100%;
}

.img-title-news img {
  width: 300px;
  border-radius: 30px;
}
/* 
.img-title-news {
  width: 400px;
} */


.news-card {
  margin: 10px;
  display: flex;
  width: 100%;
}

.flex-grow {
	flex-grow:1;
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
	width: 100%;
}

.tile-news {
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    text-align: start;
    color: rgb(17, 65, 138);
    margin-bottom: 10px;
}

.foreword-news {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    text-align: start;
    color: #353535;
}


</style>