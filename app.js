const express = require("express");
const bodyParser = require("body-parser");

const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes.routes);
app.use(shopRoutes.routes);
app.use((req, res, next) => {
  res.send("<h1>Page Not found</h1>");
});
app.listen(3000);
