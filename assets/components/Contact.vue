<template>
  <div class="content">
    <h2 id="contact">Contact</h2>
    <div class="contact-container container">
      <form action id="contact-form">
        <input v-model="form.name" placeholder="Name" type="text" name="name" />
        <input v-model="form.email" placeholder="Mail" type="mail" name="mail" />
        <input v-model="form.subject" placeholder="Subject" type="text" name="subject" />
        <textarea v-model="form.text" placeholder="Message" name="message"></textarea>
        <div class="submit-container">
          <input
            @click.prevent="submitForm"
            class="submit"
            value="Submit"
            type="submit"
            name="submit"
          />
          <!-- <div class="answer-container">
            <p>Download résumé</p>
            <input class="answer" type="button" name="answer" />
          </div> -->
        </div>
      </form>
    </div>
    <div v-if="status.result === 'error' || status.result === 'success'" class="bubble">
      <p>{{ status.message }}</p>
      <img class="" src="../media/svg/bubble1.svg" alt="point" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  @import "../sass/variables/_breakpoints.scss";
  .content {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .bubble {
      // background-image: url("../media/png/bubble1.png");
      // background-size: contain;
      // height: 10rem;
      width: 26%;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 5rem;
      right: 10rem;
      img {
        width: 17rem;
      }
      p {
        width: 14rem;
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
      }
    }
    .contact-container {
      // width: 75%;
      @include breakpoint(xsmax) {
        width: 90%;
      }
      @include breakpoint(xsmin) {
        width: 90%;
      }
      @include breakpoint(sm) {
        width: 70%;
      }
      @include breakpoint(md) {
        width: 60%;
      }
      @include breakpoint(lg) {
        width: 40%;
      }
      @include breakpoint(xl) {
        width: 30%;
      }
      form {
        display: flex;
        flex-direction: column;
        text-align: center;
        input,
        textarea {
          width: 100%;
          display: flex;
          height: 3rem;
          background-color: $bg-primary;
          border: 3px solid $bg-secondary;
          font-family: "Commondore", sans-serif;
          color: $bg-secondary;
          font-size: 1.2rem;
          box-shadow: $shadow;
          margin: {
            top: 1.5rem;
            left: auto;
            right: auto;
          }
          @include breakpoint(xsmax) {
            margin-top: 0.8rem;
            // height: 1rem;
          }
          @include breakpoint(xsmin) {
            // height: 1rem;
            margin-top: 0.8rem;
          }
        }
        textarea {
          // height: 6rem;
          @include breakpoint(xsmax) {
            // margin-top: 0;
            height: 4rem;
          }
          @include breakpoint(xsmin) {
            height: 4rem;
            // margin-top: 0;
          }
          @include breakpoint(sm) {
            height: 6rem;
            // margin-top: 0;
          }
        }
        .submit-container {
          display: flex;
          flex-direction: row;
          .answer-container {
            display: flex;
            flex-direction: row;
            margin-top: 1.5rem;
            p {
              color: $p-thirdary;
              margin: {
                top: auto;
                bottom: auto;
                left: auto;
                right: 0;
              }
            }
            .answer {
              width: 14%;
              margin: {
                left: 0.2rem;
                right: 0;
                top: 0;
                bottom: 0;
              }
            }
          }
          .submit {
            display: block;
            text-align: center;
            width: 20%;
            margin-left: 0;
            &:hover {
              box-shadow: $shadow-hover;
            }
            @include breakpoint(xsmax) {
              width: 50%;
            }
            @include breakpoint(xsmin) {
              width: 50%;
            }
            @include breakpoint(sm) {
              width: 40%;
            }
            @include breakpoint(lg) {
              width: 20%;
            }
          }
        }
      }
    }
  }
</style>
<script>
  // import '@sendgrid/mail'

  export default {
    data() {
      return {
        errors: [],
        form: {
          name: null,
          email: null,
          subject: null,
          text: null,
        },
        answer: null,
        status: {
          result: null,
          message: null
        },
      }
    },
    mounted() {

    },
    methods: {
      checkResponse(res) {
        if (res.result === 'success') {
          this.status.message = res.message
          this.status.result = res.result
        } else {
          this.status.message = res.message
          this.status.result = res.result
        }
      },
      submitForm() {
        // fetch('http://localhost:3000')
        fetch('/api/send/', {
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(response => response.json())
          .then(response => {
            this.checkResponse(response)
          })
        // .then(() => {
        //   location.reload()
        // })
      },
      checkForm() {
        if (!this.form.name) {
          this.errors = 'Please fill out your name'
          return false
        }
        if (!this.form.email) {
          this.errors = 'Please fill out your email'
          return false
        }
        if (!this.form.message) {
          this.errors = 'Please fill out your message'
          return false
        }
        if (!this.form.answer) {
          this.errors = 'Please fill out your answer'
          return false
        }
      }
    }
  }
</script>