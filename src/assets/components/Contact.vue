<template>
  <div class="content">
    <h2 id="contact">Contact</h2>
    <div class="contact-container container">
      <ValidationObserver ref="observer">
        <form action id="contact-form">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="input-container">
              <input v-model="form.name" placeholder="Name" type="text" name="name" />
              {{observer}}
              <p>{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <div class="input-container">
              <input v-model="form.email" placeholder="Mail" type="mail" name="mail" />
              <p>{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="input-container">
              <input v-model="form.subject" placeholder="Subject" type="text" name="subject" />
              <p>{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="input-container">
              <textarea v-model="form.text" placeholder="Message" name="message"></textarea>
              <p class="ta-errmsg">{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
          <div class="submit-container">
            <input
              :disabled="observer"
              @click.prevent="submitForm"
              class="submit"
              value="Submit"
              type="submit"
              name="submit"
            />
            <!-- <div class="answer-container">
            <p>Download résumé</p>
            <input class="answer" type="button" name="answer" />
            </div>-->
          </div>
        </form>
      </ValidationObserver>
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
    // .bubble {
    //   width: 14rem;
    //   height: 11rem;
    //   background-repeat: no-repeat;
    //   position: absolute;
    //   bottom: 2rem;
    //   right: 13rem;
    //   img {
    //     width: 14rem;
    //   }
    //   p {
    //     width: 14rem;
    //     position: absolute;
    //     top: 1rem;
    //     left: 1.5rem;
    //   }
    // }
    .contact-container {
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
        span {
          .input-container {
            position: relative;
            p {
              position: absolute;
              top: 2.7rem;
            }
            .ta-errmsg {
              @include breakpoint(xsmax) {
                top: 3.7rem;
              }
              @include breakpoint(xsmin) {
                top: 3.7rem;
              }
              @include breakpoint(sm) {
                top: 5.7rem;
              }
            }
          }
        }
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
            margin-top: 1rem;
          }
          @include breakpoint(xsmin) {
            margin-top: 1rem;
          }
        }
        textarea {
          @include breakpoint(xsmax) {
            height: 4rem;
          }
          @include breakpoint(xsmin) {
            height: 4rem;
          }
          @include breakpoint(sm) {
            height: 6rem;
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
  import { ValidationProvider, ValidationObserver } from 'vee-validate';

  import { extend } from 'vee-validate';
  import { required, email } from 'vee-validate/dist/rules';

  extend('positive', value => {
    if (value >= 0) {
      return true;
    }

    return 'The {_field_} field must be a positive number';
  });
  extend('required', {
    ...required,
    message: 'This field is required'
  });
  extend('email', {
    ...email,
    message: 'Write a valid email'
  });

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data() {
      return {
        value: '',
        // serrors: [],
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
        url: `https://johanwestin.com/api/send/`
      }
    },
    mounted() {
    },
    methods: {
      checkResponse(res) {
        if (res.result === 'success') {
          this.$store.state.status.message = res.message
          this.$store.state.status.result = res.result
          this.clearForm()
        } else {
          this.$store.state.status.message = res.message
          this.$store.state.status.result = res.result
        }
        setTimeout(function(){ 
          // this.$store.state.status.message = null
          // this.$store.state.status.result = null
          location.reload()
         }, 3000);
      },
      async submitForm() {
        let isValid = await this.$refs.observer.validate()
        console.log(isValid)
        if (!isValid) {
          return
        }
        fetch(this.url, {
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(response => response.json())
          .then(response => {
            this.checkResponse(response)
          })
      },
      clearForm() {
        this.form.name = ''
        this.form.email = ''
        this.form.subject = ''
        this.form.text = ''
        this.$refs.observer.reset();
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
