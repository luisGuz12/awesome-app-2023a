import http from 'http';

//importando expressjs
import express from 'express';

//crear una instancia de express
const app = express();

//creando servidor 
const server = http.createServer(app);

//definir puertos 
const port = 3000;
const ip = "0.0.0.0";

//arrancando el server
server.listen(port, ip, (err)=>{ 
    console.log(`📣 sirviendo en ${process.env.ip}:3000`);
    console.log(`📣 sirviendo en ${process.env.port}:3000`);
 })