import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SeriesCatalog from '@/views/SeriesCatalog.vue'
import News from '@/views/News.vue'
import MySeries from '@/views/MySeries.vue'
import Profile from '@/views/Profile.vue'
import Calendar from '@/views/Calendar.vue'
import Favorites from '@/views/Favorites.vue'
import Authorization from '@/views/Authorization.vue'
import Register from '@/views/Register.vue'

import AddNewsForm from '@/views/AddNewsForm.vue'
import NewsForm from '@/components/NewsForm.vue'
import NewsEdit from '@/components/NewsEdit.vue'




import Posts from '@/views/Posts.vue'
import AddPostForm from '@/views/AddPostForm.vue'
import PostForm from '@/components/PostForm.vue'
import PostEdit from '@/components/PostEdit.vue'

import store from '@/store'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/series_catalog',
    name: 'series_catalog',
    component: SeriesCatalog
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    // children: [
    //   {
    //     path: 'news_form',
    //     component: NewsForm,
    //   },
    //   {
    //     path: 'news_edit',
    //     component: NewsEdit,
    //   },
    // ],
  },
  {
    path: '/news_form/:id',
    component: NewsForm,
  },
  {
    path: '/news_edit/:id',
    component: NewsEdit,
  },
  {
    path: '/add_news',
    name: 'add_news',
    component: AddNewsForm,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/my_series',
    name: 'my_series',
    component: MySeries,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: Authorization,
    beforeEnter: (to, from, next) => {
      if (!store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/posts',
    name: 'news_posts',
    component: Posts,
    children: [
      {
        path: ':id',
        component: PostForm,
      },
    ],
  },
  {
    path: '/new_post',
    name: 'add_post',
    component: AddPostForm,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/post/:id',
    component: PostEdit,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


