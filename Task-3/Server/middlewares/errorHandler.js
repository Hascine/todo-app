const errorHandler = (err, req, res, next) => {
  console.log(err);

  let status = 500;
  let message = 'Internal Server Error';

  if (err.name === 'SequelizeValidationError') {
    status = 400;
    message = err.errors.map((error) => error.message);
  }

  if (err.name === 'BadRequest') {
    status = 400;
    message = err.message;
  }

  if (err.name === 'Unauthorized') {
    status = 401;
    message = err.message;
  }

  if (err.name === 'NotFound') {
    status = 404;
    message = err.message;
  }

  if (err.name === 'TaskNotFound') {
    status = 404;
    message = 'Task not found';
  }

  if (err.name === 'SubTaskNotFound') {
    status = 404;
    message = 'Subtask not found';
  }

  if (err.name === 'InvalidEmailPassword') {
    status = 400;
    message = 'Invalid email or password';
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
