import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const port = process.env.port || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//routes
app.use("/", express.static(path.join(__dirname, "/home")));
app.use("/news", express.static(path.join(__dirname, "/news")));
app.use("/about", express.static(path.join(__dirname, "/about")));
app.use("/contact", express.static(path.join(__dirname, "/contact")));
app.use(
  "/LoginRegisterPage",
  express.static(path.join(__dirname, "/LoginRegisterPage"))
);

//port listening
app.listen(port, () => {
  console.log("running on port http://localhost:4000");
});
