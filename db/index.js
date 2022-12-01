const pgp= require('pg-promise')();
const connectionString = 
    "postgresql://postgres:654321gb@localhost:5432/CSE_412";

const db= pgp(connectionString);

module.exports = db;

