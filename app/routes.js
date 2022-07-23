const express = require('express');
const todos_data = require("./data.json");

const router = express.Router();

//Root mapping
router.get('/', (req, res) => {
    res.send(
      `Welcome to todo viewer!`,
    ); 
  }); 

//Fetch todo list  
router.get("/todo", (req, res) =>{
  res.json(todos_data);
});

module.exports = router;