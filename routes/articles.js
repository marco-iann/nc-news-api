const articlesRouter = require('express').Router();

const { getArticles } = require('../controllers/articles');

articlesRouter.get('/', getArticles);

module.exports = articlesRouter;
