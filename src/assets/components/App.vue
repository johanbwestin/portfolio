<template>
  <div>
    <hamburger-menu />
    <!-- <hero /> -->
    <!-- <animations /> -->
    <!-- <qualifications /> -->
    <footers />
  </div>
</template>
<style lang="scss">
</style>
<script>
  import Animations from './Animation.vue'
  import HamburgerMenu from './HamburgerMenu.vue'
  import Hero from './Hero.vue'
  import Footers from './Foot.vue'
  import Qualifications from './Qualifications.vue'

  export default {
    components: {
      'animations': Animations,
      'footers': Footers,
      'hamburger-menu': HamburgerMenu,
      'hero': Hero,
      'qualifications': Qualifications,
    }
  }
</script>
