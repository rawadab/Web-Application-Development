const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mysql = require('mysql2');

// Create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Qawsedrf123',
    database: 'web-project'
});

// Connect to the database
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/", (req, res) => {
    res.send("Welcome to Gym-Tech!");
});

app.get("/allUsers", (req, res) => {
    connection.connect();
    connection.query("select * from users", function (error, results) {
        console.log("query response is ", results);
        res.json(results);
    })
});

app.get("/allExercises", (req, res) => {
    connection.connect();
    connection.query("select * from trainingexercises", function (error, results) {
        console.log("query response is ", results);
        res.json(results);
    })
});

app.get("/allPrudacts", (req, res) => {
    connection.connect();
    connection.query("select * from products", function (error, results) {
        console.log("query response is ", results);
        res.json(results);
    })
});



app.listen(port, () => {
    console.log(`The app listening at http://localhost:${port}`);
});