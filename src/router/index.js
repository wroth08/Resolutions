import Vue from 'vue'
import Router from 'vue-router'
import ResolutionsList from '../components/ResolutionsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/todo',
      component: ResolutionsList
    }
  ],
  mode: 'history'
})
