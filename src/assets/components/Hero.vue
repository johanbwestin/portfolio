<template>
  <section class="header">
    <h1>Johan Westin</h1>
    <p class="about">Web developer based in Gothenburg</p>
    <div @click="$store.commit('walkAnim', 'home'), onClick()" class="btn">
      <router-link v-scroll-to="'#project'" to="/">
        <p>Projects</p>
      </router-link>
    </div>
    <video
      class="video-background"
      alt="background video"
      type="video/mp4"
      autoplay
      loop
      muted
      playsinline
    >
      <source :src="video" type="video/mp4" />
    </video>
  </section>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  .header {
    width: 100%;
    height: 150vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    z-index: 1;
    h1 {
      position: absolute;
      width: 100%;
      z-index: 4;
      text-align: center;
      top: 23%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .about {
      width: 100%;
      position: absolute;
      // top: 42%;
      z-index: 4;
      text-align: center;
      // color: $h1-primary;
      text-shadow: $h1-shadow;
      @include breakpoint(xsmin) {
        top: 45%;
      }
      @include breakpoint(xsmax) {
        top: 42%;
      }
      @include breakpoint(xssm) {
        top: 42%;
      }
      @include breakpoint(maxhsm) {
        top: 42%;
      }
      @include breakpoint(sm) {
        top: 42%;
      }
    }
    div {
      // width: 100%;
      position: absolute;
      top: 45%;
      z-index: 4;
      border: 3px solid $p-primary;
      box-shadow: $shadow;
      @include breakpoint(xsmin) {
        top: 50%;
      }
      @include breakpoint(xsmax) {
        top: 50%;
      }
      @include breakpoint(xssm) {
        top: 50%;
      }
      @include breakpoint(sm) {
        top: 45%;
      }
      &:hover {
        box-shadow: none;
        background-color: $p-primary;
        p {
          color: $purple;
        }
      }
      p {
        padding: {
          top: 0.5rem;
          bottom: 0.5rem;
          left: 0.5rem;
          right: 0.5rem;
        }
      }
    }
    .video-background {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 1;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        video: require('../media/mp4/bg-trim.mp4')
      }
    },
  }
</script>