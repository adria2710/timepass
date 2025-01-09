const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
    const mensaje = req.query.mensaje || '';
    const hora = `${req.horaActual}:${req.minutosActuales < 10 ? '0' : ''}${req.minutosActuales}`;

    res.send(`
        <h1>¡Bienvenido a la página principal!</h1>
        <p>Hora actual: ${hora}</p>
        ${mensaje ? `<p style="color:red;">${mensaje}</p>` : ''}
        <form action="/endroute" method="get">
            <button type="submit">Ir a la página final</button>
        </form>
    `);
});

module.exports = router;