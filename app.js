const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3001;
const connectDB = require("./dbConnection");

connectDB();

app.use(express.json());
app.use("/credit", require("./src/controllers/credit.controller"));
app.use("/debit", require("./src/controllers/debit.controller"));
app.use("/balance", require("./src/controllers/balance.controller"));
app.use("/other", require("./src/controllers/other.controller"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(10001, () => {
  console.log("Server is running on port 10000");
});
