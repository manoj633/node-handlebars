const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const { products } = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", {
    pageTitle: "Shop",
    prods: products,
    hasProducts: products.length > 0,
  });
});

exports.routes = router;
