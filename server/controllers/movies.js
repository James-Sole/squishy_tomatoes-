let Movie = require('../models/movie');
let Review = require('../models/review');

module.exports = {
  index: (req, res) => {
    Movie.find({}, (err, movies) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(movies);
    });
  },
  create: (req, res)=> {
    const movie = new Movie(req.body);

    movie.save( (err) =>  {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(movie);
    });
  },
  show: (req, res)=> {
    Movie.findOne({_id: req.params.id})
    .populate('reviews')
    .exec((err, movie) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(movie);
    });
  },
  update: (req, res)=> {
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, movie) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(movie);
    });
  },
  destroy: (req, res)=> {
    Movie.remove({_id: req.params.id}, (err) => {
    if (err){
      return res.status(400).json(err);
    }
    return res.json('successfully deleted');
  });
  },
  review: (req, res)=> {
    const review = new Review(req.body);

    review.save( (err) =>  {
      if (err){
        return res.status(400).json(err);
      }
      Movie.findOneAndUpdate({_id: req.params.id}, {$push: {reviews: review}}, function(err, data){
               if(err){
                  return res.status(400).json(err);
               }
              return res.json(review);
          })
    });
  },
}
