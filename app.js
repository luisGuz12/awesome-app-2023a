// Importando Express
import express from 'express';

// Importando http-status
import httpStatus from 'http-status';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';
import errorRouter from './routes/error.route.js';

// Creando la instancia de express
// que básicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Registrando middleware para el error 404
app.use(errorRouter);
// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});
