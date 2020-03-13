const express = require('express')
const sgMail = require('@sendgrid/mail')
const mailTo = process.env.MAIL_TO
const sgApi = process.env.SENDGRID_API

sgMail.setApiKey(sgApi)

const router = express.Router()

// Send Mail
router.post('/', (req, res) => {
  const msg = {
    to: mailTo,
    from: req.body.email,
    subject: 'Namn: ' + req.body.name + '. ' + req.body.subject,
    text: req.body.text,
    html: '<strong>' + req.body.text + '</strong>',
  }

  sgMail.send(msg).then(() => {
    return res.json({ result: "success", message: 'Email has been sent' })
  })
  .catch((err) => {
    return res.json({
      result: "error",
      message: err.message
    })
  })
  
})
module.exports = router
