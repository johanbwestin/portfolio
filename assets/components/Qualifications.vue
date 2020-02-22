<template>
  <section class="qualification-section">
    <div class="content-container">
      <h2>Qualifications</h2>
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
            <rect class="stat-bg" x="calc(50% - 25%)" y="2" />
            <rect class="fill" x="calc(50% - 25%)" y="2">
              <animate
                :begin="fill"
                attributeName="height"
                from="0"
                :to="fillCalc(stats.exp)"
                dur="0.5s"
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

  .qualification-section {
    height: 170vh;
    width: 100%;
    background-color: $bg-secondary;
    position: absolute;
    top: 280vh;
    display: flex;
    .content-container {
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      h2 {
        margin-top: 5rem;
        color: $h2-secondary;
        text-shadow: $shadow;
      }
      .animation-section {
        margin-top: 6rem;
        height: 48vh;
        width: 75%;
        display: flex;
        align-items: center;

        .stat-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 80%;
          p {
            margin-top: 1.5rem;
            color: $p-secondary;
          }
          .stat {
            position: relative;
            transform-origin: 50% 50%; /* center of rotation is set to the center of the element */
            transform: scale(1, -1);
            height: 100%;
            width: 70%;
            .stat-bg {
              rx: 6px;
              ry: 6px;
              width: 50%;
              height: 98%;
              fill: $bg-thirdary;
              fill-opacity: 0.14;
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
        ],
        fill: '',
      }
    },
    mounted() {

    },
    methods: {
      fillCalc(exp) {
        if (this.fill) {
          console.log(this.fill)
        }
        return exp + "%"
      },
      viewHandler(e) {
        if (e.type === "enter") {
          return this.fill = '0s'
        }
      }
    },
  }
</script>