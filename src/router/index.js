import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/IndexPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import("@/views/Category.vue"),
  },
  {
    path: '/detail/:postId',
    name: 'Detail',
    component: () => import("@/views/Detail.vue"),
    
  },
  {
    path: '/ivents',
    name: 'Ivents',
    component: () => import("@/views/Ivents.vue"),
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () => import("@/views/Authors.vue"),
  },
  {
    path: '/author/:authorId',
    name: 'AutorProfile',
    component: () => import("@/views/AuthorProfile.vue"),
  },
  {
    path: '/features/toxicity',
    name: 'toxicity',
    component: () => import("@/views/ToxicityPage.vue"),
  },
  {
    path: '/features/use',
    name: 'use',
    component: () => import("@/views/UsePage.vue"),
  },
  {
    path: '/features/qna',
    name: 'qna',
    component: () => import("@/views/QnaPage.vue"),
  },
  {
    path: '/ivents',
    name: 'ivents',
    component: () => import("@/views/Ivents.vue"),
  },

  {
    path: '/ivents/dictation',
    name: 'dictation',
    component: () => import("@/views/Ivent_dictation.vue"),
  },
  {
    path: '/ivents/conference',
    name: 'conference',
    component: () => import("@/views/Ivent_conference.vue"),
  },
  {
    path: '/ivents/bear',
    name: 'bear',
    component: () => import("@/views/Ivent_bear.vue"),
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
