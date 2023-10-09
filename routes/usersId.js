import express from "express";
const ids = express.Router();

ids.get("/id", (req, res) => {
    console.log("ID is here");
})


export default ids