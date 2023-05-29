//FILE CONTROLLER
const express = require("express")
const dbConnect = require('./config/mongo')
const app = express()

app.use(express.json());

const port =  3000

/**
 *  Aqui invocamos a las rutas
 */
//TODO localhost/api/_______________

dbConnect();

//app.use("/api", require("./routes"))

app.use('*', (req, res, next) => {
    if (!connected) {
      return res.status(500).send("Couldn't stablish connection. Please, contact the admin");
    } else {
        res.end('Connection DB stablished\n');
      return next();
    }
  });

app.listen(port, () => {
    console.log(`tu app esta lista por http://localhost:${port}`)
})

