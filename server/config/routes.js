var path = require('path'),
  movies = require('../controllers/movies');

module.exports = (app) => {
  app.get('/movies', movies.index);
  app.post('/movies', movies.create);
  app.get('/movies/:id', movies.show);
  app.post('/movies/:id/review', movies.review);
  app.patch('/movies/:id', movies.update);
  app.delete('/movies/:id', movies.destroy);

  app.all('*', (req, res, next)=> {
    res.sendFile(path.resolve('./client/dist/client/index.html'))
  });
}
