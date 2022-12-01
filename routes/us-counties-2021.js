const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req,res) =>{

    db.any("SELECT date,state,cases,deaths FROM \"us-counties-2021\" WHERE cases > 150000 AND deaths < 100;")

    .then(rows =>{
        console.log(rows);
        res.json(rows);

    })

    .catch(error =>{
        console.log(error);
    })
})

module.exports= router;