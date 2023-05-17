const express=require('express');
const app=express();
console.log(process.env.PORT);

const port=8085;

app.get('/clientes',(req,res)=>{
    res.json({mesanje:"Regresandoa clientes."})
})
app.get('/proveedores',(req,res)=>{
    res.json({mesanje:"Peticion get aaa la ruta de proveedores."})
})

app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`)
})