/* eslint-disable no-undef */
const express = require("express");
const app = express();
const mongoose = require("./config/connection");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const loginApis = require("./routes/Login");
const cors = require("cors");
dotenv.config();

let port = 4000;
app.use(cors());

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/signinSystem", loginApis);

app.listen(port, "localhost", () => {
  console.log(`The server is up! at http://localhost:${port}`);
});
