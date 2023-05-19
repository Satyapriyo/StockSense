const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const dotenv = require("dotenv");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai")
dotenv.config();
const port = process.env.PORT || 7652;
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(cors());
app.use(express.json());
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
  res.render("landingpage");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/trade", (req, res) => {
  res.render("trade");
});
app.get("/newsall", (req, res) => {
  res.render("newsall");
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/chat", (req, res) => {
  res.render("chat");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/typeOne", (req, res) => {
  res.render("typeOne");
});
app.get("/typeTwo", (req, res) => {
  res.render("typeTwo");
});
app.get("/largeCap", (req, res) => {
  res.render("largeCap");
});
app.get("/midCap", (req, res) => {
  res.render("midCap");
});
app.get("/smallCap", (req, res) => {
  res.render("smallCap");
});
app.get("/equityLargeCapIndex", (req, res) => {
  res.render("equityLargeCapIndex");
});
app.get("/equityMidCapIndex", (req, res) => {
  res.render("equityMidCapIndex");
});
app.get("/multiCap", (req, res) => {
  res.render("multiCap");
});
app.get("/equitySmallCapIndex", (req, res) => {
  res.render("equitySmallCapIndex");
});
app.get("/midCap", (req, res) => {
  res.render("flexiCap");
});
app.get("/flexiCap", (req, res) => {
  res.render("flexiCap");
});
app.get("/focused", (req, res) => {
  res.render("focused");
});
app.get("/international", (req, res) => {
  res.render("international");
});
app.get("/contra", (req, res) => {
  res.render("contra");
});
app.get("/elss", (req, res) => {
  res.render("elss");
});
app.get("/retirementSolution", (req, res) => {
  res.render("retirementSolution");
});

app.get("/aggressiveHybrid", (req, res) => {
  res.render("aggressiveHybrid");
});
app.get("/equitySavings", (req, res) => {
  res.render("equitySavings");
});
app.get("/conservativeHybrid", (req, res) => {
  res.render("conservativeHybrid");
});
app.get("/dynamicAssetAllocation", (req, res) => {
  res.render("dynamicAssetAllocation");
});

app.get("/multiAssetAllocation", (req, res) => {
  res.render("multiAssetAllocation");
});

app.get("/retirementSolution", (req, res) => {
  res.render("retirementSolution");
});

app.get("/children", (req, res) => {
  res.render("children");
});
app.get("/arbitrage", (req, res) => {
  res.render("arbitrage");
});
app.get("/hybridDomesticFoF", (req, res) => {
  res.render("hybridDomesticFoF");
});
//equityDomesticFoF
app.get("/equityDomesticFoF", (req, res) => {
  res.render("equityDomesticFoF");
});
//chating process
app.post("/chat", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    console.log(prompt)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
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
//login cheek
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await Register.findOne({ email: email });
    // console.log(`${email} and ${password}`);
    // // res.send(userEmail.password);
    if (userEmail.password === password) {
      res.status(201).render("index");
    } else {
      res.send("password or email is not matching");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
//port listening
app.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});
