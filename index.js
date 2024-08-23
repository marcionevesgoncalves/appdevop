const express = require("express")

const app = express();

const path = require('path')

const PORT = 3001
let msn = "Hello World - Deploy!"

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})