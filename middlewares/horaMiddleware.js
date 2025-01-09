// Middleware para obtener la hora actual
const horaMiddleware = (req, res, next) => {
    const fecha = new Date();
    req.horaActual = fecha.getHours();
    req.minutosActuales = fecha.getMinutes();
    next();
};

module.exports = horaMiddleware;