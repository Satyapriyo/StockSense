const express = require("express");
const app = express();
const port = process.env.port || 3000;

//routes
app.use(express.static("Home"));
app.use("/news", express.static("news"));
app.use("/about", express.static("about"));
app.use("/contact", express.static("contact"));
app.use("/LoginRegisterpage", express.static("LoginRegisterPage"));

//port listening
app.listen(port, () => {
  console.log("running on port http://localhost:3000");
});

module.exports = app;
