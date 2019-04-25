const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const controllers = require("./controllers/index");
const bodyParser = require("body-parser");
//const helpers = require('./views/helpers/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
    //helpers: helpers
  })
);

app.set("port", process.env.PORT || 3000);
app.use(controllers); //This line requires the router in the 'controllers' folder

module.exports = app;
