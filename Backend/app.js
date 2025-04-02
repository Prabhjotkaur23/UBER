const dotevnv = require('dotenv');
dotevnv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db/db');

app.use(cors());






app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;


