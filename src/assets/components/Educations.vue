<template>
  <div class="content">
    <h2 id="education">Educations</h2>
    <div class="education-container container">
      <ul>
        <li>
          <p>Car Mechanic  | 2011 | Bromangymnasiet</p>
        </li>
        <li>
          <p>Car Inspector | 2015 | NDT Training Partner</p>
        </li>
        <li>
          <p>Web Developer | 2020 | IThögskolan</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  .education-container {
    padding: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    ul {
      margin: {
        top: 3rem;
      }
      padding: {
        left: 2rem;
        right: 1rem;
      }
      list-style-image: url("../media/svg/bullet.svg");
      li {
        list-style-type: square;
        margin-top: 2rem;
        p {
          color: $p-thirdary;
          @include breakpoint(xsmax) {
            white-space: pre-wrap;
            font-size: 1rem;
          }
          @include breakpoint(xsmin) {
            white-space: pre-wrap;
            font-size: 1rem;
          }
          @include breakpoint(sm) {
            white-space: pre-wrap;
          font-size: $li;
          }
        }
      }
    }
  }
</style>