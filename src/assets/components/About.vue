<template>
  <div class="content">
    <h2 id="about">About</h2>

    <div class="about-container container">
      <p>Hi!</p>
      <p>
        My name is Johan and I am 26 years old web developer. 
        I am originally from a small town in northern Sweden called 
        Hudiksvall but as of 2016 I have resided in Gothenburg. I'm 
        currently studying web development at IT-högskolan in Gothenburg 
        which i will graduate this may. Although I have spent most of my
        time in WordPress I must say that what interests me the most is 
        JavaScript and its frameworks. I have spent much of my free time 
        learning Vue, Express and React Native. And if I had to pick between
        frontend and backend I would have to say both.
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
      width: 70%;
      @include breakpoint(xsmin) {
        width: 90%;
      }
      @include breakpoint(xsmax) {
        width: 90%;
      }
      @include breakpoint(md) {
        width: 50%;
      }
      @include breakpoint(lg) {
        margin-top: 2rem;
        width: 40%;
      }
      @include breakpoint(xl) {
        width: 30%;
      }
      p {
        text-shadow: none;
        color: $p-thirdary;
      }
    }
  }
</style>