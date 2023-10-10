import express from "express"; 
import { v4 as uuidv4 } from "uuid";


const router = express.Router();

let users1 = [
  {
    "firstName": "Musaib",
    "lastName": "Syed",
    "age": "21",
  },
  {
    "firstName": "Saboor",
    "lastName": "Syed",
    "age": "21",
  },
  {
    "firstName": "Syed",
    "lastName": "Syed Abdul",
    "age": "21",
  },

  {
    
"firstName": "Syed Musaib",
"lastName": "Syed Abdul Saboor",
"age": "21"

  }
];

router.get("/allusers", (req, res) => {
  res.send(users1)
});


router.post("/adduser", (req,res)=> {
  
  const userNew = req.body;
  const userId = uuidv4();
  const userWithID = { ...users1, id: userId }
  users1.push(userId);
  res.send("Added the Users successfully :)")
})



//
export default router;
