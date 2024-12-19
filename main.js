const express = require("express");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const mysql = require("mysql");
const dbconn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school app",
});

dbconn.query("select * from teachers", (err, data)=>{
    console.log(data);
    
})