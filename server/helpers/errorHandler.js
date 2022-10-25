import { CELEBRATE_ERROR, INVALID } from '../lib/constants.js';

const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  if (message === CELEBRATE_ERROR) {
    res.status(INVALID).send({ message });
  } else {
    res.status(statusCode).send({
      message: statusCode === 500 ? 'An error occurred on the server' : message,
    });
  }
};

export default errorHandler;
