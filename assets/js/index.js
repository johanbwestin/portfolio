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
import Vuex from 'vuex'
import {
  gsap,
  TweenLite,
  TimelineLite,
  MotionPathPlugin,
  Power1,
  CSSPlugin
} from "gsap/all"

import "../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
import "../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"
// import ScrollMagic from "../../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic"

gsap.registerPlugin(CSSPlugin, TweenLite, gsap, TimelineLite, MotionPathPlugin)

var VueScrollTo = require('vue-scrollto')
 
Vue.use(VueScrollTo)
Vue.use(Vuex)
Vue.use(VueWaypoint)
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
  scrollAnimation(path) {
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
    // const controller = new ScrollMagic.Controller()

    // const scene = new ScrollMagic.Scene({
    //   triggerElement: '.animation',
    //   duration: 3000,
    //   triggerHook: 0.2

    // }).setTween(tween).addIndicators().addTo(controller).setPin(".animation")

  },
  walkAnim(e, path) {
    console.log('path')
    mutations.scrollAnimation(path)
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