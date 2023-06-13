const app = require('./app');
require('dotenv').config(); // Recibe las variables de entorno

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
});