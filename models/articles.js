const connection = require('../db/connection');

exports.selectArticles = () => {
  return connection
    .select(
      'articles.author',
      'articles.title',
      'articles.topic',
      'articles.created_at',
      'articles.votes',
      'articles.article_id'
    )
    .count({ comment_count: 'comment_id' })
    .from('articles')
    .leftJoin('comments', 'articles.article_id', '=', 'comments.article_id')
    .groupBy('articles.article_id')
    .returning('*');
};
