const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const addressRoutes = require("./routes/addressRoutes")

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>E-Commerce App</h1>");
});

app.use("/users", userRoutes);

app.use("/user/address", addressRoutes);

module.exports = app;
