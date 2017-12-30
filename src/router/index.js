import Vue from 'vue'
import Router from 'vue-router'
import ResolutionsList from '../components/ResolutionsList.vue'
import DoneResolutionsList from '../components/DoneResolutionsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/todo',
      component: ResolutionsList
    },
    {
      path: '/done',
      component: DoneResolutionsList
    }
  ],
  mode: 'history'
})
