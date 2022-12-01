const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req,res) =>{

    db.any("SELECT state FROM \"us-states\";")
    .then(rows =>{
        console.log(rows);
        res.json(rows);

    })

    .catch(error =>{
        console.log(error);
    })
})

module.exports= router;