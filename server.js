var express = require('express');
// var nodemailer = require("nodemailer");
var app = express();

var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static("styling"));
require("./routes/html")(app);

app.listen(port, function() {
    console.log("Your site listening on: " + port);
});
