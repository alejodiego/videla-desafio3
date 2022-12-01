const express = require('express')
const classContainer = require('./container/archivos.container')

const app = express();
const PORT = 8080;

//instanciamos la clase
const archivo = new classContainer('productos.txt')

app.get('/productos', async (req,res)=>{
    
    const prods = await archivo.leer()

    res.send({Productos: prods})
})

app.get('/random', async (req,res)=>{

    const prods = await archivo.leer()
    const random = parseInt(Math.random() * prods.length)
    res.send({Productos: prods[random]})
})

const server = app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
