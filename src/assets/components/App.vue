<template>
  <div>
    <hamburger-menu />
    <hero />
    <animations />
    <qualifications />
    <footers />
  </div>
</template>
<style lang="scss">

</style>
<script>
  const Animations     = () => import('./Animation.vue')
  const HamburgerMenu  = () => import('./HamburgerMenu.vue')
  const Hero           = () => import('./Hero.vue')
  const Footers        = () => import('./Foot.vue')
  const Qualifications = () => import('./Qualifications.vue')

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
