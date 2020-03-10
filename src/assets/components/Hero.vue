<template>
  <section class="header">
    <h1>Johan Westin</h1>
    <video class="video-background" autoplay loop muted plays-inline>
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
      top: 26%;
    }
    .video-background {
      display: block;
      margin: auto;
      height: 100%;
      position: absolute;
      top: 0;
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        video: import('../media/mp4/bg-vid-trim.mp4')
      }
    },
  }
</script>