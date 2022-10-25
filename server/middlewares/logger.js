import winston from 'winston';
import expressWinston from 'express-winston';
import path from 'path';

const __dirname = path.resolve();

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, '../logs/request.log'),
    }),
  ],
  format: winston.format.json(),
});

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, '../logs/error.log'),
    }),
  ],
  format: winston.format.json(),
});

export { requestLogger, errorLogger };
