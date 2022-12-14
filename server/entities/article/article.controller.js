import NotFound from '../../helpers/errors/NotFound.js';
import ValidationError from '../../helpers/errors/Validation.js';
import {
  ARTICLE_NOT_FOUND_MESSAGE,
  CREATE,
  INVALID_DATA_MESSAGE,
  UNAUTHORIZE_ACTION_MESSAGE,
} from '../../lib/constants.js';
import Article from './article.schema.js';
import Forbidden from '../../helpers/errors/Forbidden.js';

/**  POST /articles
 *
 * @param {Object} req { keyword: string, title: string, text: string, date: string, source: string, link: string, image: string, owner: ObjectId }
 * @param {Promise} res Depended.
 * @param {String} next throw error for a specific scenario.
 * @returns {Object} { keyword: string, title: string, text: string, date: string, source: string, link: string, image: string, _id: ObjectId }
 */
const createArticle = (req, res, next) => {
  const { id } = req.user;
  Article.create({ ...req.body, owner: id })
    .then((data) => {
      const { owner, ...article } = data._doc;
      res.status(CREATE).send(article);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        throw new ValidationError(error.message);
      }
    })
    .catch(next);
};

/**  GET /articles
 *
 * @param {String} req JWT token in authorization headers.
 * @param {Promise} res Depended.
 * @param {String} next throw error for a specific scenario.
 * @returns {Array} An array of articles objects
 */
const getCurrentUserArticles = (req, res, next) => {
  const { id } = req.user;
  Article.find({ owner: id })
    .orFail()
    .then((articles) => {
      res.send(articles);
    })
    .catch((error) => {
      if (error.name === 'DocumentNotFoundError')
        throw new NotFound(ARTICLE_NOT_FOUND_MESSAGE);
    })
    .catch(next);
};

/**  DELETE /articles/:id
 *
 * @param {ObjectId} req The id of the article.
 * @param {Promise} res Depended.
 * @param {String} next throw error for a specific scenario.
 * @returns {Object} The deleted article
 */
const deleteArticleById = (req, res, next) => {
  const articleId = req.params._id;
  const user = req.user.id;
  Article.findById(articleId)
    .orFail()
    .select('+owner')
    .then(async (article) => {
      const { owner } = article;
      if (user == owner) {
        const data = await Article.findByIdAndRemove(articleId);
        return res.send(data);
      }
      next(new Forbidden(UNAUTHORIZE_ACTION_MESSAGE));
    })
    .catch((error) => {
      if (error.name === 'DocumentNotFoundError') {
        throw new NotFound(ARTICLE_NOT_FOUND_MESSAGE);
      } else if (error.name === 'CastError') {
        throw new ValidationError(INVALID_DATA_MESSAGE);
      }
    })
    .catch(next);
};

export { createArticle, getCurrentUserArticles, deleteArticleById };
