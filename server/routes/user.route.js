import express from 'express';

import { currentUser } from '../entities/user/user.controller.js';
import { celebrateJwt } from '../middlewares/celebrate.js';

const userRouter = express.Router();

userRouter.get('/users/me', celebrateJwt, currentUser);

export default userRouter;
