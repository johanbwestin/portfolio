<template>
  <div class="content">
    <h2>Contact</h2>
    <div class="contact-container container">
      <form action id="contact-form">
        <input v-model="form.name" placeholder="Name" type="text" name="name" />
        <input v-model="form.email" placeholder="Mail" type="mail" name="mail" />
        <input v-model="form.subject" placeholder="Subject" type="text" name="subject" />
        <textarea v-model="form.text" placeholder="Message" name="message" rows="6"></textarea>
        <div class="submit-container">
          <input
            @click.prevent="submitForm"
            class="submit"
            value="Submit"
            type="submit"
            name="submit"
          />
          <div class="answer-container">
            <p>5+1=</p>
            <input class="answer" type="number" name="answer" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../sass/variables/_colors.scss";
  @import "../sass/variables/_fonts.scss";
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    .contact-container {
      margin: {
        left: auto;
        right: auto;
        top: 2rem;
      }
      width: 75%;
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
        }
        textarea {
          height: 6rem;
        }
        .submit-container {
          display: flex;
          flex-direction: row;
          .answer-container {
            display: flex;
            flex-direction: row;
            margin-top: 1.5rem;
            p {
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
      }
    },
    mounted() {

    },
    methods: {
      submitForm() {
        console.log('submitted!')
        // fetch('http://localhost:3000')
        fetch('/api/send/', {
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(() => {
          // location.reload()
        })
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