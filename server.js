// import express
const express = require('express');
const mysql = require('mysql2');

// add PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: '71reivaJ!',
        database: 'election'
    },
    console.log('Connected to the election database')
)

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// start express server on PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});