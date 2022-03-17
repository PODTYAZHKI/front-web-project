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
    // component: () => import("@/views/AuthorProfile.vue"),
  },
  {
    path: '/features/use',
    name: 'use',
    // component: () => import("@/views/AuthorProfile.vue"),
  },
  {
    path: '/features',
    name: 'features',
    component: () => import("@/views/Features.vue"),
  },
  {
    path: '/features/qna',
    name: 'qna',
    // component: () => import("@/views/AuthorProfile.vue"),
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
  },
  {
    path: '/examples',
    name: 'examples',
    component: () => import("@/views/Examples.vue"),
  },
  {
    path: '/examples/father',
    name: 'father',
    component: () => import("@/views/Example_father.vue"),
  },
  {
    path: '/examples/love',
    name: 'love',
    component: () => import("@/views/Example_love.vue"),
  },
  {
    path: '/examples/war',
    name: 'war',
    component: () => import("@/views/Example_war.vue"),
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
