var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3030;

var app = express();


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes)

app.listen(PORT, function () {
  console.log("Listening on:" + PORT)
});
