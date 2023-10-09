import express from "express"

const router = express.Router();

const users1 = [
    {
        firstName: "Musaib",
        lastName: "Syed",
        age : "21"
    }

]

router.get("/", (req, res) => {
    res.send(users1)
});

router.post("/", (req, res) => {

    console.log("Posted");
    

})


export default router;