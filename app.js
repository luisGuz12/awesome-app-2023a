//import http from 'http';

//importando expressjs
import express from 'express';

//crear una instancia de express
const app = express();

//middleware de parseo de datos del cliente
app.use(express.urlencoded({extended: true}));
//middle de uso especifico
app.use('/about',(req, res)=> {
res.send(`
<h1 style="color: #555">About... </h1>
<p> esta pagina creada para aprender desarrollo web en js</p>
`)
});
3
//registrar nuestro primer middleware
app.use((req, res, next )=>{
console.log("📣 ejecutando el middleware 1");
//invocando al siguiente middleware
next();
});

app.use((req, res, next) => {
    console.log("⭐registrando peticion entrante");
    console.log(`${req.method} - ${req.url}`);
    next();
});

//GET /add-product
app.use('/add-product', (req, res, next) =>{
   
    if(req.method === "POST") return next();
    console.log("📣Sirviendo el formulario");
    //sirviendo el formulario
    console.log("📣Sirviendo el formulario");
    res.send(`
    <form action="/add-product" method="POST">
    <label for="title">Title</label>
    <input id="title" type="text" name="title" >


    <label for="descripcion">Description</label>
    <input id="description" type="text" name="description">

<button type="submit">Add product</button>    
    </form>
    `);
});

// POST /add-product
app.use('/add-product', (req, res) =>{
//realizando extraccion de los
//datos de la peticion 
for(const prop in req.body){
    console.log(`PROP: ${prop} : ${req.body[prop]}`);
}
//redireccionamiento 

    res.redirect('/');

});

app.use((req, res) => {
    console.log("⭐ respondiendo al cliente");
    res.send(`
    <h1> welcome to express</h1>
    <p>This is my awesome app</p>
    `);
});

//creando servidor 
//const server = http.createServer(app);

//definir puertos 
const port = 3000;
const ip = "0.0.0.0";

//arrancando el server
app.listen(port, ip, (err)=>{ 
    console.log(`📣 sirviendo en ${process.env.ip}:3000`);
    console.log(`📣 sirviendo en ${process.env.port}:3000`);
 })