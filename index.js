const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config");
const dotenv = require("dotenv");
dotenv.config();

app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRoutes);

app.get("/", (req, res, next) => {
  res.send("Auth-api");
});

port = process.env.port;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("listening");
    });
  })
  .catch((error) => {
    console.log("mongo connection failed:-", error);
  });

app.listen(8080, () => {
  console.log("listening");
});
