const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('connection error - mongoose');
});

db.once('open', function() {
  console.log('we\'re connected to the DB');
});

module.exports = db;
