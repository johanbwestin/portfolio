<template>
  <nav class="main-menu">
    <svg
      class="hamburger"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 87 69"
      @click="onClick"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
    >
      <defs>
        <filter
          id="Rectangle_21"
          class="rectangle"
          x="0"
          y="0"
          width="87"
          height="29"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood :flood-color="shadowColor" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_22"
          class="rectangle"
          x="0"
          y="20"
          width="87"
          height="29"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur-2" />
          <feFlood :flood-color="shadowColor" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_23"
          class="rectangle"
          x="0"
          y="40"
          width="87"
          height="29"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur-3" />
          <feFlood :flood-color="shadowColor" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Group_44"
        data-name="Group 44"
        :fill="$store.state.menuColor"
        transform="translate(-98 -60)"
      >
        <g transform="matrix(1, 0, 0, 1, 98, 60)" filter="url(#Rectangle_21)">
          <rect
            id="Rectangle_21-2"
            data-name="Rectangle 21"
            width="69"
            height="11"
            rx="3"
            transform="translate(9 6)"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 98, 60)" filter="url(#Rectangle_22)">
          <rect
            id="Rectangle_22-2"
            data-name="Rectangle 22"
            width="69"
            height="11"
            rx="3"
            transform="translate(9 26)"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 98, 60)" filter="url(#Rectangle_23)">
          <rect
            id="Rectangle_23-2"
            data-name="Rectangle 23"
            width="69"
            height="11"
            rx="3"
            transform="translate(9 46)"
          />
        </g>
      </g>
    </svg>
    <ul v-if="$store.state.active" class="menu">
      <li @click="$store.commit('walkAnim', 'home'), onClick()">
        <router-link v-scroll-to="'#project'" to="/">
          <p>Project</p>
        </router-link>
      </li>
      <li @click="$store.commit('walkAnim', 'about'), onClick()">
        <router-link v-scroll-to="'#about'" to="/about">
          <p>About</p>
        </router-link>
      </li>
      <li @click="$store.commit('walkAnim', 'educations'), onClick()">
        <router-link v-scroll-to="'#education'" to="/educations">
          <p>Education</p>
        </router-link>
      </li>
      <li @click="$store.commit('walkAnim', 'contact'), onClick()">
        <router-link v-scroll-to="'#contact'" to="/contact">
          <p>Contact</p>
        </router-link>
      </li>
      <li @click="onClick">
        <a v-scroll-to="'#qualification'">
          <p>Qualification</p>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";

  .main-menu {
    overflow: visible;
    .svg {
      overflow: visible;
      .rectangle {
        width: 4rem;
        box-shadow: $shadow;
        filter: url(#shadow3);
      }
    }
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 5;
      position: fixed;
      background-color: $bg-menu;
      height: 100vh;
      width: 100%;
      @include breakpoint(md) {
        width: 34%;
      }
      @include breakpoint(lg) {
        width: 30%;
      }
      @include breakpoint(xl) {
        width: 25%;
      }
      li {
        list-style: none;
        a {
          p {
            margin: {
              top: 0;
              bottom: 0;
            }
            line-height: 3.5rem;
            font-size: 1.5rem;
            color: $p-thirdary;
            text-shadow: $shadow;
            border-bottom: 3px solid transparent;
            @include breakpoint(sm) {
              font-size: 2rem;
              margin: {
                top: 0.5rem;
                bottom: 0.5rem;
              }
            }
            @include breakpoint(md) {
              font-size: 1.8rem;
              margin: {
                top: 0.5rem;
                bottom: 0.5rem;
              }
            }
            // @include breakpoint(lg) {
            //   font-size: 2rem;
            //   margin: {
            //     top: 0.8rem;
            //     bottom: 0.8rem;
            //   }
            // }
            @include breakpoint(xl) {
              font-size: 2.2rem;
              margin: {
                top: 0.8rem;
                bottom: 0.8rem;
              }
            }
            &:hover {
              text-shadow: $shadow-hover;
              border-bottom: 3px solid #162452;
              box-shadow: $shadow-underline;
            }
          }
        }
      }
    }
    .hamburger {
      position: fixed;
      z-index: 6;
      left: 3rem;
      top: 3rem;
      width: 70px;
      height: 69px;
      @include breakpoint(xsmax) {
        left: 1rem;
        top: 1rem;
        width: 65px;
        height: 45px;
      }
      @include breakpoint(xsmin) {
        left: 1rem;
        top: 1rem;
        width: 65px;
        height: 45px;
      }
      @include breakpoint(sm) {
        left: 1rem;
        top: 1rem;
        width: 65px;
        height: 45px;
      }
      @include breakpoint(md) {
        left: 3rem;
        top: 3rem;
        width: 75px;
        height: 60px;
      }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        shadowColor: '#D72EDD',
        beforeActive: false
      }
    },
    mounted() {
    },
    methods: {
      mouseOver() {
        this.shadowColor = '#91D9FF'
      },
      mouseLeave() {
        this.shadowColor = '#D72EDD'
      },
      onClick() {
        if (!this.$store.state.active) {
          this.$store.state.active = true
          this.$store.state.menuColor = '#162452'
        } else {
          this.$store.commit('onEnter')
          if (this.$store.state.inSection) {
            this.$store.commit('onEnter')
            // console.log('insection', this.$store.state.inSection, 'active', this.$store.state.active)
          } else {
            this.$store.commit('onLeave')
            // console.log('!insection', this.$store.state.inSection, 'active', this.$store.state.active)
          }
          this.$store.state.active = false
        }
        if (!this.$store.state.active && !this.$store.state.inSection) {
          this.$store.commit('onLeave')
        }
      }
    },
  }
</script>