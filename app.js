import express from "express";
import bodyParser from "body-parser";

import router from "./routes/users.js"

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get("/user", (req, res) => {
  res.send("Hello here");
});

app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
