const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;
var mailgun = require("mailgun-js")({
  apiKey: api_key,
  domain: domain
});

app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.json());

app.post("/contact/send", (req, res) => {
  let data = {
    from: "James Good <postmaster@" + domain + ">",
    to: "jamesgoodwebdevelopment@gmail.com",
    subject: "Hello",
    text:
      "Name: " +
      req.body.name +
      "\n\n" +
      "Email: " +
      req.body.email +
      "\n\n" +
      "Phone Number: " +
      req.body.phoneNumber +
      "\n\n" +
      "Current Site: " +
      req.body.currentSite +
      "\n\n" +
      "Project Information: " +
      req.body.projectInfo
  };

  mailgun.messages().send(data, function(error, body) {
    console.log("inside mailguns error logs");
    console.log(error);
    console.log(body);
  });
});

// app.get("/config.js", function(req, res) {
//   res.write("var SOME_URL='" + process.env.SPACE_IDL + "'" + "\n");
//   res.write("var API_KEY='" + process.env.ACCESS_TOKEN + "'" + "\n");
//   res.end();
// });

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
