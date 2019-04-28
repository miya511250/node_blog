import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from './views/ListArticle.vue'
import CreateArticle from './views/CreateArticle.vue'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      redirect: '/articles/index'
    },
    {
      path: '/articles/index',
      name: 'list-article',
      component: ListArticle
    },
    {
      path: '/articles/create',
      name: 'areate-article',
      component: CreateArticle
    }
  ]
})