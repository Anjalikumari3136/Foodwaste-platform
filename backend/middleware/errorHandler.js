const { NODE_ENV } = process.env;

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    stack: NODE_ENV === 'development' ? err.stack : undefined,
  });
};

module.exports = errorHandler;