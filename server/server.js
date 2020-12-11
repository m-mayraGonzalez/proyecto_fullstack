const express = require('express')
const mongoose = require('mongoose');
const app = express()
require('./config/config')

app.use(express.urlencoded({
    extended:false
}))
app.use(require('./routes/usuario'));

app.get('/usuario',function (req,res){
    res.json('get todos los usuario LOCAL')
})

app.get('/usuario/:id',function (req,res){
    let id=req.params.id;
    res.json(`get usuario con id ${id}`);
});

app.post('/usuario',function(req,res){
    let body=req.body;
    if(body.nombre===undefined){
        res.status(4000).json({
            ok:false,
            mensaje:'El nombre es necesario'
        })
    }
    res.json({persona:body}); 
})

app.put('/usuario/:id',function(req,res){
    let id=req.params.id
    res.json(`put usuario ${id}`); 
})

app.delete('/usuario',function(req,res){
    res.json('delete usuario'); 
})

mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true, useUnifiedTopology: true},(err,res)=>{
    if(err) throw err;
    console.log('Base de datos Online');
});

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})