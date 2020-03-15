
<template>
  <div class="content">
    <h2 id="project">Projects</h2>
    <div class="project-container container">
      <div v-for="project in projects" :key="project" class="project">
        <div class="circle-container" :href="project.link">
          <div class="circle">
            <div
              :style="{'background-image': 'url(' + project.img + ')'}"
              :alt="project.name"
              class="bg"
            ></div>
            <div class="link-container">
              <a v-if="project.demo" :href="project.demo" class="demo" target="_blank">
                <p>Demo ⯈</p>
              </a>
              <a v-if="project.github" :href="project.github" class="github" target="_blank">
                <p>Github⯈</p>
              </a>
            </div>
          </div>
          <p class="project-name">{{ project.name }}</p>
        </div>
      </div>
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
        .circle-container {
          border-radius: 50%;
          height: 10rem;
          width: 10rem;
          .circle {
            margin: {
              top: 3rem;
              left: auto;
              right: auto;
            }
            // overflow: hidden;
            position: relative;
            border-radius: 50%;
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
            .link-container {
              position: absolute;
              display: none;
              .demo,
              .github {
                padding: {
                  top: 4px;
                  bottom: 4px;
                  left: 4px;
                  right: 4px;
                }
                margin: 3px;
                border: 2px solid black;
                background-color: $bg-secondary;
                p {
                  margin-top: 0;
                }
                &:hover {
                  background-color: #D72EDD;
                }
              }
            }
            .bg {
              border-radius: 50%;
              border: 2px solid black;
              box-shadow: $shadow;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              height: 100%;
              width: 100%;
            }
          }
          .project-name {
            color: $p-thirdary;
            margin: {
              top: 0;
              left: auto;
              right: auto;
            }
            padding-top: 1rem;
            width: 9rem;
          }
          &:hover {
            .circle {
              .bg {
                -webkit-filter: blur(4px);
                filter: blur(1px);
                box-shadow: none;
                border: none;
              }
              .link-container {
                display: flex;
                flex-direction: column;
              }
            }
            .project-name {
              text-shadow: $shadow-hover;
            }
          }
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
          { name: 'EZNET', github: 'https://github.com/jotner/eznet', demo: 'https://jotner.se/eznet/', img: require('../media/png/eznet.png') },
          { name: 'Alingsås- akademin', github: '', demo: 'http://xn--alingssakademin-mlb.se/', img: require('../media/png/mat.png') },
          { name: 'EZTV', github: 'https://github.com/jotner/eztv', demo: '', img: require('../media/png/eztv.png') },
          { name: 'Foresight Bank', github: 'https://github.com/jotner/foresightbank', demo: '', img: require('../media/png/bank.png') },
        ],
      }
    },
    mounted() {

    },
    methods: {

    },
  }
</script>