<template>
  <div class="content">
    <h2 id="project">Projects</h2>
    <div class="project-container container">
      <div class="project">
        <div class="circle" style="background-image: url('./assets/media/png/eznet1.png')"></div>
        <p>EZNET</p>
      </div>
      <div class="project">
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
    .project-container {
      display: flex;
      align-content: space-around;
      margin-top: 2rem;
      .project {
        flex-direction: column;
        flex: 1;
        text-align: center;
        display: flex;
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
        .circle {
          margin: {
            top: 3rem;
            left: auto;
            right: auto;
          }
          border: 3px solid black;
          height: 10rem;
          width: 10rem;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: $shadow;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          color: $p-thirdary;
          margin: {
            top: 1rem;
            left: auto;
            right: auto;
          }
          width: 10rem;
          text-shadow: none;
        }
      }
    }
  }
</style>