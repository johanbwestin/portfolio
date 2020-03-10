<template>
  <section class="animation">
    <div v-view="viewHandler" class="trigger"></div>
    <div class="about">
      <div class="content-container">
        <router-view />
      </div>
      <div class="animation-menu">
        <router-link to="/">
          <div class="waypoint-container" @click="$store.commit('walkAnim',{ x: 0, y: 0})">
            <img class="waypoint" src="../media/svg/waypoint-1.svg" />
            <img class="waypoint-sm" src="../media/svg/wp-small.svg" />
            <h4>About</h4>
          </div>
        </router-link>
        <div class="dot-container">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <router-link to="/projects">
          <div class="waypoint-container" @click="$store.commit('walkAnim',{ x: 210, y: 0})">
            <img class="waypoint" src="../media/svg/waypoint-2.svg" />
            <img class="waypoint-sm" src="../media/svg/wp-small.svg" />
            <h4>Projects</h4>
          </div>
        </router-link>
        <div class="dot-container">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <router-link to="/educations">
          <div class="waypoint-container" @click="$store.commit('walkAnim',{ x: 420, y: 0})">
            <img class="waypoint" src="../media/svg/waypoint-3.svg" />
            <img class="waypoint-sm" src="../media/svg/wp-small.svg" />
            <h4>Education</h4>
          </div>
        </router-link>
        <div class="dot-container">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <router-link to="/contact">
          <div class="waypoint-container" @click="$store.commit('walkAnim', { x: 640, y: 0})">
            <img class="waypoint" src="../media/svg/waypoint-4.svg" />
            <img class="waypoint-sm" src="../media/svg/wp-small.svg" />
            <h4>Contact</h4>
          </div>
        </router-link>
        <img class="johan" src="../media/png/johan-front-r.png" alt="point" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

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
    justify-content: center;
    .trigger {
      position: absolute;
      top: 17%;
      left: 0;
      width: 1rem;
      height: 1rem;
    }
    .about {
      margin-top: 52vh;
      width: 100%;
      text-shadow: $shadow;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content-container {
        width: 100%;
      }
      .animation-menu {
        display: flex;
        justify-content: space-around;
        position: relative;
        width: 100%;
        @include breakpoint(sm) {
          width: 30rem;
        }
        @include breakpoint(smed) {
          width: 40rem;
        }
        @include breakpoint(md) {
          width: 44rem;
        }
        @include breakpoint(lg) {
          width: 47rem;
        }
        .dot-container {
          width: 100%;
          justify-content: space-around;
          @include breakpoint(xsmin) {
            display: none;
          }
          @include breakpoint(xsmax) {
            display: none;
          }
          @include breakpoint(sm) {
            display: flex;
          }

          .dot {
            margin-top: 0.5rem;
            display: block;
            height: 0.4rem;
            width: 0.4rem;
            background-color: $bg-secondary;
            border: 1px solid #d72edd;
          }
        }
        .waypoint-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          @include breakpoint(xsmax) {
            width: 100%;
            margin: {
              left: auto;
              right: auto;
            }
          }
          @include breakpoint(xsmin) {
            width: 100%;
            margin: {
              left: auto;
              right: auto;
            }
          }
          .waypoint,
          .waypoint-sm {
            flex: 1;
            position: relative;
            z-index: 1;
            -webkit-filter: drop-shadow($shadow);
            filter: drop-shadow($shadow);
          }
          .waypoint {
            @include breakpoint(xsmax) {
              display: none;
            }
            @include breakpoint(xsmin) {
              display: none;
            }
            @include breakpoint(sm) {
              display: flex;
            }
          }
          .waypoint-sm {
            @include breakpoint(xsmax) {
              display: flex;
            }
            @include breakpoint(xsmin) {
              display: flex;
            }
            @include breakpoint(sm) {
              display: none;
            }
          }
          h4 {
            text-align: center;
          }
        }
        .router-link-exact-active {
          .waypoint, .waypoint-sm {
            -webkit-filter: drop-shadow($shadow-hover);
            filter: drop-shadow($shadow-hover);
          }
          h4 {
            text-shadow: $shadow-hover;
          }
        }
        .johan {
          position: absolute;
          z-index: 1;
          height: 7rem;
          bottom: 70%;
          left: 3.5%;
          @include breakpoint(xsmax) {
            display: none;
          }
          @include breakpoint(xsmin) {
            display: none;
          }
          @include breakpoint(sm) {
            display: flex;
          }
        }
      }
    }
  }
</style>
<script>

  export default {
    data() {
      return {

      }
    },
    mounted() {
      console.log(process.env.PORT)
      let path

      if (this.$route.path === "/") {
        path = { x: 0, y: 0 }
        this.$store.commit('walkAnim', path)
      }
      if (this.$route.path === "/projects") {
        path = { x: 210, y: 0 }
        this.$store.commit('walkAnim', path)
      }
      if (this.$route.path === "/educations") {
        path = { x: 420, y: 0 }
        this.$store.commit('walkAnim', path)
      }
      if (this.$route.path === "/contact") {
        path = { x: 640, y: 0 }
        this.$store.commit('walkAnim', path)
      }
    },
    methods: {
      viewHandler(e) {
        if (e.percentTop < 0.123 || this.$store.state.active) {
          this.$store.commit('onEnter')
          this.$store.state.inSection = true
        }
        if (e.percentTop > 0.123 && !this.$store.state.active) {
          this.$store.commit('onLeave')
          this.$store.state.inSection = false
        }
        if (e.percentTop > 0.123 && this.$store.state.active) {
          this.$store.state.inSection = false
        }


      },
      // animationPath(path) {
      //   const flightPath = {
      //     autoRotate: false,
      //     curviness: 1.25,
      //     path: [path]
      //   }
      //   const tween = new TimelineLite()
      //   tween.add(
      //     TweenLite.to('.johan', 1, {
      //       ease: Power1.easeInOut,
      //       motionPath: flightPath,
      //     })
      //   )
      //   // const controller = new ScrollMagic.Controller()

      //   // const scene = new ScrollMagic.Scene({
      //   //   triggerElement: '.animation',
      //   //   duration: 3000,
      //   //   triggerHook: 0.2

      //   // }).setTween(tween).addIndicators().addTo(controller).setPin(".animation")

      // },
      // walkAnim(path) {
      //   this.animationPath(path)
      // }
    },
  }
</script>
