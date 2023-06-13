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


app.post('/subtraction', (req, res) => {
    // Json format expected
    const { num1, num2 } = req.body;
    // Verify number format
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'The numbers are invalid, please try again!!' });
    }
    const result = num1 - num2;
    return res.status(200).json({ result:result });
});

module.exports = app;