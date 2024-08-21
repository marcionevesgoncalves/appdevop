const express = require("express")

const app = express();

const PORT = 3001
let msn = "Hello World - Part final!"

app.get('/',(req,res)=>{
    res.send(msn)
})

app.listen(PORT,'marcionevesgoncalves.github.io', ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})