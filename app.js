const express = require("express")

const app = express();

const PORT = 3001
let msn = "Hello World - Part final!"

app.get('/',(req,res)=>{
    res.send(msn)
})

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})