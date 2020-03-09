
<template>
  <div class="content">
    <h2 id="project">Projects</h2>
    <div class="project-container container">
      <div v-for="project in projects" :key="project" class="project">
        <a :href="project.link">
          <div class="circle" :style="{'background-image': 'url(' + project.img + ')'}"></div>
          <p>{{ project.name }}</p>
        </a>
      </div>

      <!-- <div class="project">
        <div class="circle" style="background-image: url('./assets/media/png/mat.png')"></div>
        <p>Alingsås- akademin</p>
      </div>
      <div class="project">
        <div class="circle" style="background-image: url('./assets/media/png/eztv1.png')"></div>
        <p>EZTV</p>
      </div>
      <div class="project">
        <div class="circle" style="background-image: url('./assets/media/png/bank.png')"></div>
        <p>Foresight Bank</p>
      </div>-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .project-container {
      display: flex;
      // margin-top: 2rem;
      justify-content: space-around;
      @include breakpoint(xsmax) {
        width: 100%;
        flex-wrap: wrap;
      }
      @include breakpoint(xsmin) {
        width: 100%;
        flex-wrap: wrap;
      }
      @include breakpoint(sm) {
        width: 70%;
        flex-wrap: nowrap;
      }
      @include breakpoint(md) {
        width: 60%;
      }
      @include breakpoint(lg) {
        width: 50%;
      }
      .project {
        flex-direction: column;
        text-align: center;
        display: flex;

        @include breakpoint(xsmax) {
          margin-top: 2rem;
        }
        @include breakpoint(xsmin) {
          margin-top: 2rem;
        }
        @include breakpoint(sm) {
          margin-top: 3rem;
        }
        @include breakpoint(lg) {
          margin-top: 4rem;
        }
        a {
          border-radius: 50%;
          height: 10rem;
          width: 10rem;
          &:hover {
            .circle {
              -webkit-filter: blur(4px);
              filter: blur(1px);
              box-shadow: none;
              border: none;
            }
            p {
              color: $p-primary;
            }
          }
        }
        .circle {
          margin: {
            top: 3rem;
            left: auto;
            right: auto;
          }
          border: 3px solid black;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: $shadow;
          display: flex;
          align-items: center;
          justify-content: center;
          @include breakpoint(xsmax) {
            margin-top: 0;
            height: 5rem;
            width: 5rem;
          }
          @include breakpoint(xsmin) {
            margin-top: 0;
            height: 5rem;
            width: 5rem;
          }
          @include breakpoint(xs/s) {
            height: 6rem;
            width: 6rem;
          }
          @include breakpoint(sm) {
            height: 6rem;
            width: 6rem;
          }
          @include breakpoint(sm) {
            height: 7rem;
            width: 7rem;
          }
          @include breakpoint(lg) {
            height: 10rem;
            width: 10rem;
          }
        }
        p {
          color: $p-thirdary;
          margin: {
            top: 0;
            left: auto;
            right: auto;
          }
          padding-top: 1rem;
          width: 9rem;
          text-shadow: none;
        }
      }
    }
  }
</style>
<script>
  export default {
    /* eslint-disable sort-keys */
    data() {
      return {
        projects: [
          { name: 'EZNET', link: '90', img: require('../media/png/eznet1.png') },
          { name: 'Alingsås- akademin', link: '90', img: require('../media/png/mat.png') },
          { name: 'EZTV', link: '50', img: require('../media/png/eztv1.png') },
          { name: 'Foresight Bank', link: '80', img: require('../media/png/bank.png') },
        ],
      }
    },
    mounted() {

    },
    methods: {

    },
  }
</script>