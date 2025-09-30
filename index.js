const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const products = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "iMac" },
];

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  res.send("Post products");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
