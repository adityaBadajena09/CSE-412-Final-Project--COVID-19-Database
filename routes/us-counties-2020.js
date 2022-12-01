const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req,res) =>{

    db.any("SELECT date,state,cases,deaths FROM \"us-counties-2020\" WHERE deaths = 0 AND cases <10;")

    .then(rows =>{
        console.log(rows);
        res.json(rows);

    })

    .catch(error =>{
        console.log(error);
    })
})

module.exports= router;