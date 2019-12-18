const {Book} = require('./models.js');

//CREATE
const postOneBook = function (input) {
  var newItem = new Book({
    title: input.title,
    author: input.author,
    description: input.description,
    didRead: input.didRead || false,
    isCurrentlyReading: input.isCurrentlyReading || false,
    willRead: input.willRead || true,
    wouldRecommend: input.wouldRecommend || false
  })
  return newItem.save();
};

//READ
const getAllBooks = function () {
  return Book.find({});
};

//UPDATE
const updateOneBook = function (bookTitle, input) {
  return Book.findOneAndUpdate({ bookTitle }, input);
};

//DELETE
const deleteOneBook = function (bookTitle) {
  return Book.deleteOne({ bookTitle });
};


module.exports = {
  postOneBook,
  getAllBooks,
  updateOneBook,
  deleteOneBook
};