/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const app = express();
const mongoose = require("./config/connection");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const loginApis = require("./routes/Login");
const productMaker = require("./routes/product");
const quantityAdder = require("./routes/quantity");
const orderAdder = require("./routes/Order");
const contactApis = require("./routes/ContactUs");
const cartApis = require("./routes/Cart");
const cors = require("cors");
dotenv.config();

let port = 4000;
app.use(cors());

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/signinSystem", loginApis);
app.use("/productInfo", productMaker);
app.use("/quantityInfo", quantityAdder);
app.use("/orderInfo", orderAdder);
app.use("/postFeedback", contactApis);
// cart apis
app.use("/cart", cartApis);

app.listen(port, "localhost", () => {
  console.log(`The server is up! at http://localhost:${port}`);
});
