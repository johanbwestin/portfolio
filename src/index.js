import './assets/sass/style.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
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
import App        from './assets/components/App.vue'
import Projects   from './assets/components/Projects.vue'
import About      from './assets/components/About.vue'
import Educations from './assets/components/Educations.vue'
import Contact    from './assets/components/Contact.vue'

// ScrollAnimation
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
      component: Projects,
      path: '/',
      props: true
    },
    {
      component: Educations,
      path: '/educations',
      props: true
    },
    {
      component: About,
      path: '/about'
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