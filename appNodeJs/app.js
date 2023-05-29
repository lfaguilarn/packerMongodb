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
    if (!conexion) {
      return res.status(500).send("Error de conexion");
    } else {
        res.end('Cadena de conexion establecida - Aguilar Luis - Ecuador\n');
      return next();
    }
  });

app.listen(port, () => {
    console.log(`dirigete a http://localhost:${port}`)
})

