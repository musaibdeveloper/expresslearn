import express from "express";
import bodyParser from "body-parser";

import usersRouter from "./routes/users.js"
import usersId from "./routes/usersId.js"

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/users", usersRouter , usersId)

app.get("/", (req, res) => {
  res.send("Hello here");
});

app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
