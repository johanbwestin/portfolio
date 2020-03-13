<template>
  <footer class="footer">
    <div class="social">
      <router-link to="/contact" @click="$store.commit('walkAnim', { x: 640, y: 0 })">
        <img class="icon" alt="mail icon" src="../media/svg/mail.svg" />
      </router-link>
      <a href>
        <img class="icon" alt="github icon" src="../media/svg/github.svg" />
      </a>
      <a href>
        <img class="icon" alt="linkedin icon" src="../media/svg/linkedin.svg" />
      </a>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  footer {
    height: 10vh;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bg-secondary;
    z-index: 1;
    @include breakpoint(xsmax) {
      top: 480vh;
    }
    @include breakpoint(xsmin) {
      top: 480vh;
    }
    @include breakpoint(sm) {
      top: 428vh;
    }
    .social {
      .icon {
        margin: 0.25rem;
        height: 2rem;
      }
    }
  }
</style>