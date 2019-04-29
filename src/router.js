import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/svestenstvo',
      name: 'priesthood',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Priesthood.vue')
    },
    {
      path: '/istorijat-hrama',
      name: 'history-temple',
      component: () => import('./views/HistoryTemple.vue')
    },
    {
      path: '/istorijat-grada',
      name: 'history-city',
      component: () => import('./views/HistoryCity.vue')
    },
    {
      path: '/raspored-bogosluzenja',
      name: 'schedule-worship',
      component: () => import('./views/ScheduleWorship.vue')
    },
    {
      path: '/mediavideo',
      name: 'mediavideo',
      component: () => import('./views/MediaVideo.vue')
    },
    {
      path: '/pravoslavni-kalendar',
      name: 'ortodox-calendar',
      component: () => import('./views/OrtodoxCalendar.vue')
    },
    {
      path: '/galerija',
      name: 'gallery',
      component: () => import('./views/Gallery.vue')
    },
    {
      path: '/slike',
      name: 'images',
      component: () => import('./views/Images.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        (to.params.folderId) ? next() : next({name: 'home'});
      }
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
