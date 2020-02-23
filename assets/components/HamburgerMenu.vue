<template>
  <section class="menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="87"
      height="69"
      viewBox="0 0 87 69"
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
      <g id="Group_44" data-name="Group 44" transform="translate(-98 -60)">
        <g transform="matrix(1, 0, 0, 1, 98, 60)" filter="url(#Rectangle_21)">
          <rect
            id="Rectangle_21-2"
            data-name="Rectangle 21"
            width="69"
            height="11"
            rx="3"
            transform="translate(9 6)"
            fill="#ff668d"
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
            fill="#ff668d"
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
            fill="#ff668d"
          />
        </g>
      </g>
    </svg>
  </section>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";

  .rectangle {
    width: 4rem;
    box-shadow: $shadow;
    // filter:url(#shadow);
    filter: url(#shadow3);
    overflow: visible;
  }
  #hamburger {
    overflow: visible;
  }
  .hamburger {
    overflow: visible;
  }
  .svg {
    overflow: visible;
  }
  .menu {
    overflow: visible;
    position: fixed;
    z-index: 5;
    left: 3rem;
    top: 3rem;
  }
</style>
<script>
  export default {
    data() {
      return {
        shadowColor: '#D72EDD'
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
      }
    },
  }
</script>