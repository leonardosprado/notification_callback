const express = require("express")
var fs = require("fs");
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {

    fs.readFile('log.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(data);
        console.log(data);
      });
      
//   res.send(`URL de callback para notificação, o sistema irá notificar quando o processo de assinatura for finalizado, será feito uma requisição 
//   HTTP(s) - POST na URL informada, na chamada será concatenado o código transação no final da url informada neste parâmetro.`)
})
app.post('/notification_callback',(req,res)=>{
    var tcn = req.query.tcn;
    var logger = fs.createWriteStream('log.txt')
    logger.write(`${new Date()}:::${tcn}`) // append string to your file
    console.log(tcn);
    res.status(200);
    res.send({
        message:"notification_callback",
        tcn: tcn
    });
})
app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${port}`)
  })