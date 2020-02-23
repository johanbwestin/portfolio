require('dotenv').config()
const express = require('express')
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))
sgMail.setApiKey(process.env.SENDGRID_API)

// app.get('/', function (request, response) {
// response.write('hello world')
// sgMail.send(msg, (error) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     response.end()

//   }
//   response.end()
// }).catch(err =>
//   console.log(err)
// )
// })
const sendMail = msg => {
  const status = sgMail.send(msg)
  return status
}

app.post('/send', function (request, response) {
  const msg = {
    to: process.env.MAIL,
    from: request.body.email,
    subject: 'Namn: ' + request.body.name + '. ' + request.body.subject,
    text: request.body.text,
    html: '<strong>' + request.body.text + '</strong>',
  }
  // console.log(msg)
  // response.write("test" + request.body)
  // console.error(request.body)

  sgMail.send(msg).then(() => {
    console.log('SIGNUP EMAIL SENT')
    return response.json({ result: "success", message: 'Email has been sent' })
  })
    .catch((err) => {
      console.log('SIGNUP EMAIL SENT ERROR')
      return response.json({
        result: "error",
        message: err.message
      })
    })




  // sendMail(msg)
  //   .then(() => {
  //     return response.send('Email has been sent!')
  //   })
  //   .catch(error => {
  //     return response.send('There was an error sending this message')
  //   })
})
app.listen({ port: 3000 }, function () {
  console.log('The service is running!')
})
