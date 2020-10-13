const express = require("express");
const exhbrs = require("express-handlebars");
const products = require("./products.json");
const port = 4444;

const app = express();

app.use(express.static("public"));
app.set("view engine", "hbs");
app.engine("hbs", exhbrs({ extname: "hbs" }));

app.get("/", (req, res) => {
  res.render("home", { title: "Main" });
});
app.get("/about", (req, res) => {
  res.render("about", { cssFileName: "about", title: "О нас" });
});
app.get("/products", (req, res) => {
  res.render("products", {
    products: products,
    cssFileName: "products",
    title: "Продукты",
  });
});

app.get("/product/:productId", (req, res) => {
  console.log(req.params);
  const product = products.find((p) => p.id === req.params.productId);
  res.render("product", { product, cssFileName: "products" });
});

app.listen(port, () => {
  console.log(`Appliction server is running on port ${port}`);
});
