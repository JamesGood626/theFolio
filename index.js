const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const KEYS = require('./config/prod_keys')
var api_key = KEYS.API_KEY
var domain = KEYS.DOMAIN
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})


app.use(express.static(path.join(__dirname, 'client/build')))

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



// app.get('https://cdn.contentful.com/spaces/o0wcfti34e3q/entries?access_token=90baae4254924c96b4c0bb82e164c9413373ca90b6f4266b2a30dd69bf42b857',
// (req, res) => {
//   console.log(res)
// })

// var contentful = require('contentful')
// var util = require('util')
// var client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: 'o0wcfti34e3q',
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web aprequire("contentful")p
//   accessToken: '90baae4254924c96b4c0bb82e164c9413373ca90b6f4266b2a30dd69bf42b857'
// })

// client.getEntries()
// .then(function (entries) {
//   console.log(util.inspect(entries, {depth: null}))
// })



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})


const PORT = process.env.PORT || 5000
app.listen(PORT)