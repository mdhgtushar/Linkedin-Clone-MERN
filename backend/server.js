const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config()

app.listen(process.env.PORT, (err) => !err ? console.log("successfylly connected") : console.log("there is something error" + err))