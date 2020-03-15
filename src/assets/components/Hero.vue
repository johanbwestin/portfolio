<template>
  <section class="header">
    <h1>Johan Westin</h1>
    <video
      class="video-background"
      alt="background video"
      controls="false"
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
      z-index: 4;
      // top: 22%;
      top: 27%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .video-background {
      position: fixed;
      top: 57%;
      left: 50%;
      z-index: 1;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      transform: translate(-50%, -50%);
    }
    // video:-webkit-full-screen {
    //   width: 100%;
    //   height: 100%;
    //   max-height: 100%;
    // }
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