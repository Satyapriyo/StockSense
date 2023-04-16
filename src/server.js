const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.port || 3000;
//database connecting
require("./db/connect");
const Register = require("./models/registers");
//static files hosting

const static_path = path.join(__dirname, "../public");
const templetes_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
//hbs setting
app.set("view engine", "hbs");
app.set("views", templetes_path);
hbs.registerPartials(partial_path);
//routes
app.get("/", (req, res) => {
  res.render("index");
});
// app.get("/home", (req, res) => {
//   const username = req.query.username;
//   res.render("home", { username: username });
// });
// app.get("/home", (req, res) => {
//   res.render("home");
// });
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.post("/register", async (req, res) => {
  try {
    if (req.body != null) {
      const registerUser = new Register({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const username = req.body.username;
      const registered = await registerUser.save();
      res.status(201).render("index");
    } else {
      res.json({ message: "data not found" });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
//port listening
app.listen(port, () => {
  console.log("running on port http://localhost:3000");
});
