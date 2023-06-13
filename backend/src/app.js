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

app.post('/plus', (req, res) => {
    // Json format expected
    const { num1, num2 } = req.body;
    // Verify number format
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'The numbers are invalid, please try again!!' });
    }
    const result = num1 + num2;
    return res.status(200).json({ result:result });
});



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

app.get('/info', (req, res) => {
  const estudiante1 = {
    nombre: 'Erwin Fernando',
    apellido: 'Vásquez Peñate',
    carnet: '202001534'
  };

  const estudiante2 = {
    nombre: 'Sergie Daniel',
    apellido: 'Arizandieta Yol',
    carnet: '202000119'
  };

  const estudiante3 = {
    nombre: 'Kevin Steve',
    apellido: 'Martinez Lemus',
    carnet: '202004816'
  };

  const estudiante4 = {
    nombre: 'Kevin Golwer Enrique',
    apellido: 'Ruiz Barbales',
    carnet: '201603009'
  };

  const data = {
    estudiante1: estudiante1,
    estudiante2: estudiante2,
    estudiante3: estudiante3,
    estudiante4: estudiante4
  };

   return res.status(200).json(data);
});

module.exports = app;