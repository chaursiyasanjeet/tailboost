const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  errorMiddelware,
  pageNotFound,
} = require("./middelware/errorMiddelware");
const sale = require("./routes/sale");
const auth = require("./routes/auth");

const app = express();

dotenv.config();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ status: "ACTIVE", message: "Server is running" });
});

//routings
app.use(sale);
app.use(auth);

//error handler page not found
app.use((req, res, next) => {
  const err = new Error("page not found");
  err.status = 404;
  next(err);
});

//error handler middleware
app.use(pageNotFound);
app.use(errorMiddelware);

app.listen(process.env.PORT, async (error) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`server is running on http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
