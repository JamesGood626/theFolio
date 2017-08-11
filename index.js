const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const KEYS = require('./config/prod_keys')
var api_key = KEYS.API_KEY
var domain = KEYS.DOMAIN
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})



app.use(bodyParser.json())

app.post('/contact/send', (req, res) => {
  console.log("inside server's post")
  let data = {
    from: "James Good <postmaster@" + domain + ">",
    to: 'jamesgoodwebdevelopment@gmail.com',
    subject: 'Hello',
    text: "Name: " + req.body.name + "\n\n" + "Email: " + req.body.email + "\n\n" + 
          "Phone Number: " + req.body.phoneNumber + "\n\n" + "Current Site: " + req.body.currentSite +"\n\n" + 
          "Project Information: " + req.body.projectInfo
  }
 
  mailgun.messages().send(data, function (error, body) {
    console.log(body)
  })
})


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)

