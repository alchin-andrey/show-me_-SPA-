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
    component: News
  },
  {
    path: '/my_series',
    name: 'my_series',
    component: MySeries
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites,
    beforeEnter: (to, from, next) => {
      if (this.$store.user.isValidToken) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: Authorization
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


