<template>
  <section class="animation">
    <div class="about">
      <div class="content-container">
        <router-view />
      </div>
      <div class="animation-menu">
        <router-link to="/">
          <div class="waypoint-container" @click="onClick({ x: 0, y: 0}, 'hej')">
            <img class="waypoint" src="../media/svg/waypoint-1.svg" />
            <h4>About</h4>
          </div>
        </router-link>
        <router-link to="/projects">
          <div class="waypoint-container" @click="onClick({ x: 210, y: 0}, 'hej')">
            <img class="waypoint" src="../media/svg/waypoint-2.svg" />
            <h4>Projects</h4>
          </div>
        </router-link>
        <router-link to="/educations">
          <div class="waypoint-container" @click="onClick({ x: 420, y: 0}, 'hej')">
            <img class="waypoint" src="../media/svg/waypoint-3.svg" />
            <h4>Education</h4>
          </div>
        </router-link>
        <router-link to="/contact">
          <div class="waypoint-container" @click="onClick({ x: 640, y: 0}, $event)">
            <img class="waypoint" src="../media/svg/waypoint-4.svg" />
            <h4>Contact</h4>
          </div>
        </router-link>
        <img class="johan" src="../media/png/johan-front-r.png" alt="point" />
        <img class="path" src="../media/svg/path1.svg" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";

  // Fixa routerlinks och animation

  .animation {
    z-index: 4;
    height: 200vh;
    width: 100%;
    -webkit-clip-path: polygon(0% 16%, 100% 0%, 100% 84%, 0 100%);
    clip-path: polygon(0% 16%, 100% 0%, 100% 84%, 0 100%);
    background-color: $bg-primary;
    position: absolute;
    top: 116vh;
    display: flex;
    // align-items: center;
    justify-content: center;
    .about {
      margin-top: 30rem;
      width: 40%;
      text-shadow: $shadow;
      .animation-menu {
        display: flex;
        justify-content: space-between;
        position: relative;
        .waypoint {
          flex: 1;
          position: relative;
          z-index: 1;
          -webkit-filter: drop-shadow($shadow);
          filter: drop-shadow($shadow);
        }
        .router-link-exact-active {
          img {
            -webkit-filter: drop-shadow($shadow-hover);
            filter: drop-shadow($shadow-hover);
          }
          h4 {
            text-align: center;
            text-shadow: $shadow-hover;
          }
        }
        .johan {
          position: absolute;
          z-index: 1;
          height: 7rem;
          bottom: 70%;
          left: 3.5%;
        }
        .path {
          position: absolute;
          top: 12px;
          left: 88px;
          z-index: 0;
        }
      }
    }
  }
</style>
<script>
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

  export default {
    data() {
      return {

      }
    },
    mounted() {
      console.log(process.env.VUE_APP_ENV_VARIABLE)
      console.log(process.env.NODE_ENV)

      let path

      if (this.$route.path === "/") {
        path = { x: 0, y: 0 }
        this.scrollAnimation(path)
      }
      if (this.$route.path === "/projects") {
        path = { x: 210, y: 0 }
        this.scrollAnimation(path)
      }
      if (this.$route.path === "/educations") {
        path = { x: 420, y: 0 }
        this.scrollAnimation(path)
      }
      if (this.$route.path === "/contact") {
        path = { x: 640, y: 0 }
        this.scrollAnimation(path)
      }
    },
    methods: {
      scrollAnimation(path) {
        // console.log(path)
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
      onClick(path) {
        // console.log(this.$route.path)
        this.scrollAnimation(path)
      }
    },
  }
</script>