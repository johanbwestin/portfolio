<template>
  <section class="qualification-section">
    <div class="trigger"></div>
    <div class="content-container">
      <h2 id="qualification">Qualifications</h2>
      <div v-view="viewHandler" class="animation-section">
        <div v-for="stats in statistics" :key="stats" class="stat-container">
          <svg
            version="1.1"
            class="stat"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
          >
            <filter id="shadow1">
              <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#FF668D" />
            </filter>
            <rect class="stat-bg" x="0%" y="2" />
            <rect v-if="fill" class="fill" x="0%" y="2">
              <animate
                :begin="fill"
                attributeName="height"
                from="0"
                :to="fillCalc(stats.exp)"
                dur="1s"
                fill="freeze"
              />
            </rect>
          </svg>
          <p>{{ stats.lang }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  .qualification-section {
    width: 100%;
    background-color: $bg-secondary;
    position: absolute;
    top: 280vh;
    display: flex;
    z-index: 1;
    @include breakpoint(xsmax) {
      height: 200vh;
    }
    @include breakpoint(xsmin) {
      height: 200vh;
    }
    @include breakpoint(smed) {
      height: 148vh;
    }
    .trigger {
      position: absolute;
      left: 0;
      width: 1rem;
      height: 1rem;
      
      // @include breakpoint(sm) {
      // top: 22%;
      // }
      // @include breakpoint(md) {
      //   top: 22%;
      // }
      // @include breakpoint(lg) {
      //   top: 62%;
      // }
      // @include breakpoint(xl) {
      //   top: 62%;
      // }
    }
    .content-container {
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      h2 {
        color: $h2-secondary;
        text-shadow: $shadow;
        @include breakpoint(xsmax) {
          margin-top: 0rem;
        }
        @include breakpoint(xsmin) {
          margin-top: 0rem;
        }
        @include breakpoint(smed) {
          margin-top: 10rem;
        }
        @include breakpoint(md) {
          margin-top: 7rem;
        }
      }
      .animation-section {
        height: 48vh;
        width: 75%;
        display: flex;
        align-items: space-between;
        flex-wrap: wrap;
        justify-content: space-between;
        @include breakpoint(lg) {
          width: 50%;
        }
        .stat-container {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 80%;
          width: 16rem;
          @include breakpoint(xsmax) {
            width: 26%;
            margin-top: 3rem;
            max-width: 7rem;
          }
          @include breakpoint(xsmin) {
            margin-top: 3rem;
            max-width: 7rem;
            width: 26%;
          }
          @include breakpoint(sm) {
            width: 10%;
          }
          @include breakpoint(md) {
            width: 60%;
          }
          @include breakpoint(lg) {
            margin-top: 6rem;
            width: 8%;
          }
          @include breakpoint(xl) {
            width: 8%;
          }

          p {
            margin-top: 1.5rem;
            color: $p-secondary;
            text-align: center;
            @include breakpoint(xsmax) {
              margin-top: 0.5rem;
              font-size: 0.6rem;
              width: 5rem;
            }
            @include breakpoint(xsmin) {
              margin-top: 0.5rem;
              font-size: 0.6rem;
              width: 5rem;
            }
            @include breakpoint(sm) {
              font-size: 1rem;
              width: 8rem;
            }
            @include breakpoint(md) {
              margin-top: 0.5rem;
              font-size: 1rem;
              width: 8rem;
            }
          }
          .stat {
            position: relative;
            transform-origin: 50% 50%; /* center of rotation is set to the center of the element */
            transform: scale(1, -1);
            height: 100%;
            width: 100%;
            overflow: visible;
            .stat-bg {
              rx: 6px;
              ry: 6px;
              width: 50%;
              height: 98%;
              fill: $bg-thirdary;
              fill-opacity: 0.14;
              @include breakpoint(xsmax) {
                font-size: 0.6rem;
                width: 100%;
              }
              @include breakpoint(xsmin) {
                font-size: 0.6rem;
                width: 100%;
              }
              @include breakpoint(sm) {
                font-size: 1rem;
                width: 100%;
              }
            }
            .fill {
              rx: 6px;
              ry: 6px;
              width: 50%;
              height: 0;
              fill: $bg-primary;
              filter: url(#shadow1);
              -webkit-filter: url(#shadow1);
              transition-delay: 100ms;
              transition-duration: 2000ms;
              @include breakpoint(xsmax) {
                font-size: 0.6rem;
                width: 100%;
              }
              @include breakpoint(xsmin) {
                font-size: 0.6rem;
                width: 100%;
              }
              @include breakpoint(sm) {
                font-size: 1rem;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        statistics: [
          { lang: 'Css/Sass', exp: 90 },
          { lang: 'HTML', exp: 90 },
          { lang: 'Java', exp: 50 },
          { lang: 'Javascript', exp: 80 },
          { lang: 'PHP', exp: 70 },
          { lang: 'SQL', exp: 85 },
          // { lang: 'Linus', exp: 100 },
        ],
        fill: '',
      }
    },
    mounted() {
      // if (this.fill === '') {
      //   document.getElementsByTagName("animate").removeAttribute('fill')
      // }
    },
    methods: {
      fillCalc(exp) {
        return exp + "%"
      },
      viewHandler(e) {
        if (e.percentTop < 0.575) {
          this.$store.state.inSection = false
          this.$store.commit('onLeave')
        }
        if (e.percentTop > 0.575 && e.type === 'progress' || this.$store.state.active) {
          this.$store.state.inSection = true
          this.$store.commit('onEnter')
        }
        if (e.percentTop < 0.674 && this.$store.state.active) {
          this.$store.state.inSection = false
        }
        if (e.type === "enter") {
          this.fill = '0s'
        }
      }
    },
  }
</script>