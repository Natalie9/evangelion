import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Index.vue')
    }, {
      name: 'posters',
      path: 'posters',
      component: () => import('pages/Posters.vue')
    },
    {
      name: 'animes',
      path: 'animes',
      component: () => import('pages/AnimeList.vue')
    }, {
      name: 'anime',
      path: 'anime',
      component: () => import('pages/AnimeInfo.vue')
    }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
