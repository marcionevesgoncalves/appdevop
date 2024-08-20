const express = require("express")

const app = express();

const PORT = 3001
let msn = "Hello World - Part master 2!"

app.get('/',(req,res)=>{
    res.send(msn)
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})