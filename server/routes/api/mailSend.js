const express = require('express')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API)

const router = express.Router()

// Send Mail
router.post('/', (req, res) => {
  const msg = {
    to: process.env.MAIL,
    from: req.body.email,
    subject: 'Namn: ' + req.body.name + '. ' + req.body.subject,
    text: req.body.text,
    html: '<strong>' + req.body.text + '</strong>',
  }
  
  sgMail.send(msg).then(() => {
    // console.log('SIGNUP EMAIL SENT')
    return res.json({ result: "success", message: 'Email has been sent' })
  })
  .catch((err) => {
    // console.log('SIGNUP EMAIL SENT ERROR')
    return res.json({
      result: "error",
      message: err.message
    })
  })
  
})
module.exports = router