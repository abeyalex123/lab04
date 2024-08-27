const express = require('express');
const app = express();
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');
const port = 9000;

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
