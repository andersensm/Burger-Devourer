var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
var routes = require("./controllers/burgers_controller.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
  console.log("Listening on:" + PORT)
});
