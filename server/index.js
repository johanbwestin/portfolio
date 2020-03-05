require('dotenv').config()
const express = require('express')
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))
sgMail.setApiKey(process.env.SENDGRID_API)

app.post('/send', function (request, response) {
  const msg = {
    to: process.env.MAIL,
    from: request.body.email,
    subject: 'Namn: ' + request.body.name + '. ' + request.body.subject,
    text: request.body.text,
    html: '<strong>' + request.body.text + '</strong>',
  }

  sgMail.send(msg).then(() => {
    // console.log('SIGNUP EMAIL SENT')
    return response.json({ result: "success", message: 'Email has been sent' })
  })
    .catch((err) => {
      // console.log('SIGNUP EMAIL SENT ERROR')
      return response.json({
        result: "error",
        message: err.message
      })
    })

})
app.listen({ port: 3000 }, function () {
  console.log('The service is running!')
})
