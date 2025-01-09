const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

// Rutas principales
app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

// Servidor escuchando en puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});