const { error } = require("console");
const express = require("express");
const { Database } = require("sqlite3");
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
const db = new Database("./user.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err);
  console.log("connection success");
});
// db.run(
//   "CREATE TABLE users(first_name,last_name, username,password,email,id INT AUTO_INCREMENT)",
//   (error, rows) => {
//     console.log(error);
//     console.log(rows);
//   }
// );

db.run(
  "INSERT INTO users(first_name,last_name, username,password,email,id) VALUES('surya','nalam','surya_nalam','123','surya@gmail.com',1)",
  (error) => {
    console.log(error);
  }
);
db.all("select * from users", (err, rows) => {
  console.log(rows);
});
