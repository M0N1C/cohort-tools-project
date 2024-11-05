
const errorHandler = (err, req, res, next) => {
    console.error(err); // Registra el error en la consola para desarrolladores

    const statusCode = err.status || 500; // Establece el código de estado
    const message = err.message || 'Internal Server Error'; // Mensaje de error por defecto

    res.status(statusCode).json({ message }); // Responde con el mensaje de error
};

module.exports = errorHandler;
