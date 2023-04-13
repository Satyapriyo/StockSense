const express = require("express");
const app = express();
// const path = require("path");
//routes
app.use("/", express.static("home"));
app.use("/contact", express.static("LoginRegisterPage"));
app.use("/news", express.static("news"));
app.use("/about", express.static("about"));
app.use("/contact", express.static("contact"));
app.use("/LoginRegisterpage", express.static("LoginRegisterPage"));

//port listening
app.listen(3000, () => {
  console.log("running on port http://localhost:3000");
});

module.exports = app;