const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = new express();
app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes.routes);
app.use(shopRoutes.routes);
app.use((req, res, next) => {
  res.send("<h1>Page Not found</h1>");
});
app.listen(3000);
