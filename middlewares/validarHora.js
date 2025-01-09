// Middleware para validar si la hora es adecuada
const validarHora = (req, res, next) => {
    const hora = req.horaActual;

    if (hora >= 12 && hora <= 24) {
        return next(); // Hora válida, continuar
    }

    // Redirigir a la página principal con un mensaje
    const mensaje = 'Aún no son las 12 de la mañana. Intenta más tarde.';
    res.locals.mensaje = mensaje;
    return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
};

module.exports = validarHora;