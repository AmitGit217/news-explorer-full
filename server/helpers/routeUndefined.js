import { NOT_FOUND, RESOURCE_NOT_FOUND } from '../lib/constants.js';

const routeUndefined = (req, res) => {
  res.status(NOT_FOUND).send({ message: RESOURCE_NOT_FOUND });
};

export default routeUndefined;
