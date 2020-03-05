<template>
  <div class="content">
    <h2 id="about">About</h2>

    <div class="about-container container">
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent gravida mauris at sem facilisis, vitae dignissim odio suscipit.
        Phasellus interdum lacus eget nisl facilisis eleifend. Donec tempus id mauris in facilisis.
        Curabitur ut varius nulla. Proin mollis finibus nisi,
        a tempor metus molestie eu. Aliquam erat volutpat. Suspendisse volutpat nibh.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  .content {
    margin: auto;
    
    .about-container {
      padding: auto;
      width: 60%;
      @include breakpoint(xsmin) {
        // margin-top: 1.5rem;
        width: 90%;
      }
      @include breakpoint(xsmax) {
        // margin-top: 1.5rem;
        width: 90%;
      }
      @include breakpoint(md) {
        // margin-top: 0;
        width: 50%;
      }
      @include breakpoint(lg) {
        margin-top: 2rem;
        width: 40%;
        // width: 60%;
      }
      @include breakpoint(xl) {
        width: 30%;
        // width: 60%;
      }
    }
  }
</style>