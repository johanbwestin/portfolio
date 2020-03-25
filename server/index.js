require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = process.env.PORT
const cors = require('cors')
// Middleware
app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(cors())

// Handle Mail
const mailSend = require('./routes/api/mailSend')

app.use('/api/send', mailSend)

// Handle Production
if(process.env.NODE_ENV === 'production') {
  // Static Folder
  app.use(express.static(__dirname + '/public/'))
  app.disable('etag');
  
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen({ port: port }, function () {
  console.log('The service is running on port ' + port + '!')
})
