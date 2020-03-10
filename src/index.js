import './assets/sass/style.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
const App        = () => import ('./assets/components/App.vue')
const About      = () => import ('./assets/components/About.vue')
const Projects   = () => import ('./assets/components/Projects.vue')
const Educations = () => import ('./assets/components/Educations.vue')
const Contact    = () => import ('./assets/components/Contact.vue')
import checkView from 'vue-check-view'
import Vuex from 'vuex'
import VueScrollTo from "vue-scrollto"
import {
  gsap,
  TweenLite,
  TimelineLite,
  MotionPathPlugin,
  Power1,
  CSSPlugin
} from "gsap/all"

// import("../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap")
// import("../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators")
// import ScrollMagic from "../../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic"

gsap.registerPlugin(CSSPlugin, TweenLite, gsap, TimelineLite, MotionPathPlugin)
 
Vue.use(VueScrollTo)
Vue.use(Vuex)
Vue.use(checkView)
Vue.use(VueRouter)

Vue.config.devtools = true

const mutations = {
  onEnter() {
    state.menuColor = '#162452'
  },
  onLeave() {
    state.menuColor = '#FF668D'
  },
  animationPath(path) {
    const flightPath = {
      autoRotate: false,
      curviness: 1.25,
      path: [path]
    }
    const tween = new TimelineLite()
    tween.add(
      TweenLite.to('.johan', 1, {
        ease: Power1.easeInOut,
        motionPath: flightPath,
      })
    )
  },
  walkAnim(e, path) {
    mutations.animationPath(path)
  }
}

const state = {
  active: false,
  inSection: false,
  menuColor: '#FF668D',
}

const store = new Vuex.Store({
  mutations,
  state
})

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
  router,
  store
})