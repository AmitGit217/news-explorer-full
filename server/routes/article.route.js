import express from 'express';
import {
  createArticle,
  deleteArticleById,
  getCurrentUserArticles,
} from '../entities/article/article.controller.js';
import { articleValidation, celebrateId } from '../middlewares/celebrate.js';

const articleRouter = express.Router();

articleRouter.post('/articles', articleValidation, createArticle);
articleRouter.get('/articles', getCurrentUserArticles);
articleRouter.delete('/articles/:_id', celebrateId, deleteArticleById);

export default articleRouter;
