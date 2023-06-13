const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json({limit: '50mb'}));
app.use(cors())

// ROUTES
app.get('/', (req, res) =>{
    res.status(200).json({
        msg: "Main get"
    })
})

module.exports = app;