const express = require("express");

const app = express();

app.get("/", () => console.log("This is callback for app.get ('/')"));
app.get("/about", () => console.log("This is callback for app.get ('/about')"));

app.listen(4444, () => {
  console.log("Appliction server is running on port 4444");
});
