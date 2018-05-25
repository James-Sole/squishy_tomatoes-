var mongoose =require('mongoose');

let ReviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'reviewer name is required'],
    minlength: [3, "reviewer name must be at least 3 characters."]
  },
  stars: {
    type: Number,
    required: [true, 'review rating is required'],
    max: [5,'review can not exceed 5 stars']
  },
  content: {
    type: String,
    required: [true, 'review is required'],
    minlength: [3, "review must be at least 3 characters."]
  },
  _movie: {
    ref:'Movie',
    type: mongoose.Schema.Types.ObjectId
  }
}, {timestamps: true});
module.exports = mongoose.model('Review', ReviewSchema)
