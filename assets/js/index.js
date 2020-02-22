import Vue from 'vue'
import VueRouter from 'vue-router'
import '../sass/style.scss'
import App from '../components/App.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Educations from '../components/Educations.vue'
import Contact from '../components/Contact.vue'
import checkView from 'vue-check-view'
import VueWaypoint from 'vue-waypoint'
 
Vue.use(VueWaypoint)
Vue.use(checkView)
Vue.use(VueRouter)

Vue.config.devtools = true

const router = new VueRouter({
  routes: [
    {
      component: About,
      path: '/',
      props: true
    },
    {
      component: Projects,
      path: '/projects',
      props: true
    },
    {
      component: Educations,
      path: '/educations'
    },
    {
      component: Contact,
      path: '/contact'
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})