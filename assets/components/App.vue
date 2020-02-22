<template>
  <div>
    <headers />
    <animations />
    <qualifications />
    <footers />
  </div>
</template>
<style lang="scss">

</style>
<script>
  import Animations from './Animation.vue'
  import Headers from './Head.vue'
  import Footers from './Foot.vue'
  import Qualifications from './Qualifications.vue'

  export default {
    components: {
      'animations': Animations,
      'footers': Footers,
      'headers': Headers,
      'qualifications': Qualifications,
    }
  }
</script>
