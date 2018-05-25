var mongoose =require('mongoose');

let MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'movie title is required'],
    minlength: [3, "movie title must be at least 3 characters."]
  },
  reviews: [{
    ref:'Review',
    type: mongoose.Schema.Types.ObjectId
  }]
}, {timestamps: true});
module.exports = mongoose.model('Movie', MovieSchema)
