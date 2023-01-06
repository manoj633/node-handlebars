const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { engine } = require("express-handlebars");

const app = new express();

// app.engine("hbs", engine({ defaultLayout: false }));
app.engine("handlebars", engine()); // with default layout
app.set("view engine", "handlebars");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes.routes);
app.use(shopRoutes.routes);
app.use((req, res, next) => {
  res.send("<h1>Page Not found</h1>");
});
app.listen(3000);
