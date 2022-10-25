import jwt from 'jsonwebtoken';
import Unauthorize from '../helpers/errors/Unauthorize.js';
import { UNAUTHORIZE_MESSAGE } from '../lib/constants.js';

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Unauthorize(UNAUTHORIZE_MESSAGE);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(
      token,
      process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret'
    );
  } catch (err) {
    throw new Unauthorize(err);
  }
  req.user = payload;
  return next();
};

export default auth;
