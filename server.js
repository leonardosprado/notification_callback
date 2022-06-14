const express = require("express")
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send(`URL de callback para notificação, o sistema irá notificar quando o processo de assinatura for finalizado, será feito uma requisição 
  HTTP(s) - POST na URL informada, na chamada será concatenado o código transação no final da url informada neste parâmetro.`)
})
app.post('/notification_callback',(req,res)=>{
    var tcn = req.query.tcn;
    console.log(tcn);
    res.status(200);
    res.send({
        message:"notification_callback",
        tcn: tcn
    });
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })