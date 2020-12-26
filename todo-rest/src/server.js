const express = require('express');

const cors = require('cors');
const rotas = require('./rotas');
const app = express();

const bodyParser = require('body-parser')
//configurando o body parser para interpretar requests mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use(express.json())
app.use(rotas)
app.use(cors());

app.listen(3000, (req,res)=>{
    console.log("Servidor iniciado na porta 3000");
})


module.exports = app
