require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const port = process.env.PORT || 3000;
const books =  require('./database/controllers.js');
const db = require('./database/index.js');

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

/*
Create CRUD operations
[x] Create - post
[x] Read - get
[] Update - put
[] Delete - delete
[] Possible Clear (if time)
*/

//place holder routes


//Create
app.post('/books', (req, res) => {
  console.log(req.body);
  books.postOneBook(req.body)
  .then((value) => res.status(200).json(value))
  .catch((err) => {
    res.status(404)
    res.send('Failed to post book');
  });
});


//Read
app.get('/books', (req, res) => {
  books.getAllBooks()
    .then((value) => res.send(value))
    .catch((err) => {
      res.status(404)
      res.send('Failed to get books.');
    });
});

//Update
// app.put('/books', function (req, res) {
//   var updatedBook = req.body;
//   books.updateOneItem(bookId, updatedItem)
//     .then((value) => res.status(200).json(value))
//     .catch((err) => {
//       res.status(404)
//       res.send(`Item ${bookId} not updated`);
//     });
// })

//Delete
// app.delete('/books', function (req, res) {
//   var productId = req.params.productId;
//   books.deleteOneItem(productId)
//     .then((value) => res.status(200).json(value))
//     .catch((err) => {
//       res.status(404)
//       res.send(`Item ${productId} not deleted`);
//     });
// })

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
