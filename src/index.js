import '@babel/polyfill'
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
import App from './assets/components/App.vue'
import Projects from './assets/components/Projects.vue'
import About from './assets/components/About.vue'
import Educations from './assets/components/Educations.vue'
import Contact from './assets/components/Contact.vue'
import MQ from 'vue-match-media/src'

gsap.registerPlugin(CSSPlugin, TweenLite, gsap, TimelineLite, MotionPathPlugin)

Vue.use(MQ)
Vue.use(VueScrollTo)
Vue.use(Vuex)
Vue.use(checkView)
Vue.use(VueRouter)

Vue.config.devtools = true

const child = new Vue({
  mq: {
    xs: "(max-width: 320px, min-width: 320px)",
    xsSm: "(min-width: 430px)",
    sm: "(min-width: 540px) and (max-width: 670px)",
    smMed: "(min-width: 670px) and (max-width: 990px)",
    md: "(min-width: 990px) and (max-width: 1200px)",
    lg: "(min-width: 1200px)",
    xl: "(min-width: 1700px)",
  },
})

const mutations = {
  onEnter() {
    state.menuColor = '#162452'
  },
  onLeave() {
    state.menuColor = '#FF668D'
  },
  animationPath(path) {
    const johan = document.querySelector(".johan");
    const flightPath = {
      autoRotate: false,
      curviness: 1.25,
      path: [path]
    }
    const tween = new TimelineLite()
    if (johan) {
      tween.add(
        TweenLite.to('.johan', 1, {
          ease: Power1.easeInOut,
          motionPath: flightPath,
        })
      )
    }
  },
  walkAnim(e, to) {
    let path
    if (child) {
      if (to === "home") {
        path = { x: 0, y: 0 }
      }
      if (to === "about") {
        if (child.$mq.sm) {
          path = { x: 131, y: 0 }
        }
        if (child.$mq.smMed) {
          path = { x: 185, y: 0 }
        }
        if (child.$mq.md) {
          path = { x: 203, y: 0 }
        }
        if (child.$mq.lg) {
          path = { x: 216, y: 0 }
        }
      }
      if (to === "educations") {
        if (child.$mq.sm) {
          path = { x: 260, y: 0 }
        }
        if (child.$mq.smMed) {
          path = { x: 355, y: 0 }
        }
        if (child.$mq.md) {
          path = { x: 395, y: 0 }
        }
        if (child.$mq.lg) {
          path = { x: 425, y: 0 }
        }
      }
      if (to === "contact") {
        if (child.$mq.sm) {
          path = { x: 390, y: 0 }
        }
        if (child.$mq.smMed) {
          path = { x: 530, y: 0 }
        }
        if (child.$mq.md) {
          path = { x: 590, y: 0 }
        }
        if (child.$mq.lg) {
          path = { x: 640, y: 0 }
        }
      }
    }
    mutations.animationPath(path)
  },
}

const state = {
  active: false,
  inSection: false,
  menuColor: '#FF668D',
  status: {
    result: null,
    message: null
  }
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
  store,
  child,
  mq: {
    xs: "(max-width: 320px, min-width: 320px)",
    xsSm: "(min-width: 430px)",
    sm: "(min-width: 540px) and (max-width: 670px)",
    smMed: "(min-width: 670px) and (max-width: 990px)",
    md: "(min-width: 990px) and (max-width: 1200px)",
    lg: "(min-width: 1200px)",
    xl: "(min-width: 1700px)",
  },
})