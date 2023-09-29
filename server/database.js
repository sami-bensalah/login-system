const { response } = require("express")
const{Pool} = require("pg")

const pool = new Pool({user: "postgres", password: "data21", host:"localhost", port: 5432, database: "login_system_users"})
// was previously run to create database in postgres
const databaseQuery = 'CREATE DATABASE login_system_users;' 
// previously run to create the user table 
const tableQuery = 'CREATE TABLE users (userID SERIAL UNIQUE PRIMARY KEY, username VARCHAR(50) NOT NULL UNIQUE ,password varchar(255) NOT NULL);'


// runs query and returns response if successful and error other
/*pool.query(tableQuery).then((Response) =>{
    console.log("TABLE CREATED");
    console.log(response);
}).catch((err) => {console.log(err);})*/

module.exports = pool;