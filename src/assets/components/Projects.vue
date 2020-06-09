<template>
  <div class="content">
    <h2 id="project">Projects</h2>
    <div class="project-container container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="project in projects" :key="project" class="project">
          <div
            class="circle-container"
            @mouseover="onHover(project.exerpt, project.madeFor)"
            @mouseleave="onHover('')"
            :href="project.link"
          >
            <div class="circle">
              <div
                :style="{'background-image': 'url(' + project.img + ')'}"
                :alt="project.name"
                class="bg"
              ></div>
              <div class="link-container">
                <a v-if="project.demo" :href="project.demo" class="demo" target="_blank" rel="noopener">
                  <p>Demo ⯈</p>
                </a>
                <a v-if="project.github" :href="project.github" class="github" target="_blank" rel="noopener">
                  <p>Github⯈</p>
                </a>
              </div>
            </div>
            <p class="project-name">{{ project.name }}</p>
          </div>
        </swiper-slide>
        <div id="swiper-pagination" class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div v-if="exerpt || madeFor" class="exerpt-container">
      <p v-if="exerpt" class="project-exerpt">
        <span>Technologies Used:</span>
        {{ exerpt }}
      </p>
      <p v-if="madeFor" class="project-for">{{ madeFor }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  // SWIPER
  #swiper-pagination ::v-deep {
    @include breakpoint(xl) {
      bottom: 2rem;
    }
    .swiper-pagination-bullet {
      opacity: 0.4;
      border: black solid 1px;
      background-color: $bg-secondary;
      box-shadow: $shadow-pag;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
      background-color: $bg-secondary;
    }
  }
  .swiper-button-next {
    color: $p-thirdary;
    text-shadow: $shadow;
    outline: none;
    @include breakpoint(sm) {
      right: 10%;
    }
    @include breakpoint(md) {
      right: 15%;
    }
    @include breakpoint(lg) {
      right: 20%;
    }
    @include breakpoint(xl) {
      right: 22%;
    }
  }
  .swiper-button-prev {
    color: $p-thirdary;
    text-shadow: $shadow;
    outline: none;
    @include breakpoint(sm) {
      left: 10%;
    }
    @include breakpoint(md) {
      left: 15%;
    }
    @include breakpoint(lg) {
      left: 20%;
    }
    @include breakpoint(xl) {
      left: 22%;
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    .exerpt-container {
      display: flex;
      flex-direction: column;
      position: absolute;
      align-items: center;
      justify-content: center;
      @include breakpoint(xsmax) {
        bottom: 3rem;
      }
      @include breakpoint(xsmin) {
        bottom: 3rem;
      }
      @include breakpoint(sm) {
        bottom: 8rem;
      }
      @include breakpoint(md) {
        width: 50%;
      }
      @include breakpoint(maxhmd) {
        bottom: 4rem;
      }
      @include breakpoint(maxhsmed) {
        bottom: 1.5rem;
      }
      @include breakpoint(maxh) {
        bottom: 1.5rem;
      }
      p {
        color: $p-thirdary;
        text-shadow: none;
        text-align: center;
      }
    }
    .project-container {
      display: flex;
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
        position: relative;
        flex-direction: column;
        text-align: center;
        display: flex;
        @include breakpoint(xsmax) {
          margin-top: 1rem;
          align-items: center;
        }
        @include breakpoint(xsmin) {
          margin-top: 1rem;
          align-items: center;
        }
        @include breakpoint(sm) {
          margin-top: 3rem;
          width: 50%;
        }
        @include breakpoint(md) {
          margin-top: 3rem;
          width: 33%;
        }
        @include breakpoint(lg) {
          margin-top: 2rem;
          width: 33%;
        }
        @include breakpoint(xl) {
          margin-top: 2rem;
          width: 25%;
        }
        .circle-container {
          border-radius: 50%;
          height: 10rem;
          width: 10rem;
          .circle {
            margin: {
              left: auto;
              right: auto;
            }
            position: relative;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            @include breakpoint(xsmax) {
              margin-top: 0;
              height: 10rem;
              width: 10rem;
            }
            @include breakpoint(xsmin) {
              margin-top: 0;
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
                  background-color: #d72edd;
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
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

  import 'swiper/css/swiper.css'

  export default {
    /* eslint-disable sort-keys */
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      this.swiper.slideTo(0, 1000, true)
    },
    data() {
      return {
        exerpt: null,
        for: null,
        swiperOptions: {
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: "bullets"
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          // Some Swiper option/callback...
        },
        projects: [
          {
            name: 'Comida',
            github: 'https://github.com/johanbwestin/comida',
            demo: '',
            img: require('../media/png/comida.png'),
            exerpt: 'Vue CLI, VueRouter, Vuex, Wordpress API, Adobe XD.',
            madeFor: 'A recipe site i have been working on in my spare time'
          },
          {
            name: 'Johanwestin',
            github: 'https://github.com/johanbwestin/portfolio',
            demo: 'https://johanwestin.com/#/',
            img: require('../media/png/portfolio.png'),
            exerpt: 'Vuejs, VueRouter, Vuex, SendGrid, GSAP, Express, Nodejs, Webpack, nginx, letsencrypt, Adobe XD.',
            madeFor: 'This is my own site that you are visiting right now 😊'
          },
          {
            name: 'EZNET',
            github: 'https://github.com/jotner/eznet',
            demo: 'https://jotner.se/eznet/',
            img: require('../media/png/eznet.png'),
            exerpt: 'Wordpress, Woocommerce, JavaScript, Swiper, Adobe XD.',
            madeFor: 'A webpage made for a fictional webshop.'
          },
          {
            name: 'Alingsås- akademin',
            github: '',
            demo: 'http://xn--alingssakademin-mlb.se/',
            img: require('../media/png/mat.png'),
            exerpt: 'Wordpress, JavaScript, Jquery, SCSS, Webpack, Adobe XD.',
            madeFor: 'This was made for a client.'
          },
          {
            name: 'EZTV',
            github: 'https://github.com/jotner/eztv',
            demo: '',
            img: require('../media/png/eztv.png'),
            exerpt: 'PHP, Laravel, Adobe XD.',
            madeFor: 'A project for the course "PHP & database management".'
          },
          {
            name: 'Foresight Bank',
            github: 'https://github.com/jotner/foresightbank',
            demo: '',
            img: require('../media/png/bank.png'),
            exerpt: 'Nodejs, Webbpack, Vuejs, Express, Sqlite, Adobe XD.',
            madeFor: 'A webpage made for a fictional bank.'
          },
          {
            name: 'Everzone',
            github: 'https://github.com/jotner/everzone',
            demo: '',
            img: require('../media/png/everzone.png'),
            exerpt: 'PHP, Wordpress, JavaScript, Adobe XD.',
            madeFor: 'WordPress theme created for a fictional amusement park'
          },
        ],
      }
    },
    methods: {
      onHover(exerpt, madeFor) {
        this.exerpt = exerpt
        this.madeFor = madeFor
      }
    }
  }
</script>