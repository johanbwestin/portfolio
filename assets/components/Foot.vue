<template>
  <footer class="footer">
    <div class="social">
      <a href>
        <img class="icon" src="../media/svg/mail.svg" />
      </a>
      <a href>
        <img class="icon" src="../media/svg/github.svg" />
      </a>
      <a href>
        <img class="icon" src="../media/svg/linkedin.svg" />
      </a>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";

  footer {
    height: 10vh;
    width: 100%;
    position: absolute;
    top: 438vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bg-secondary;
    .social {
      .icon {
        height: 2rem;
      }
    }
  }
</style>