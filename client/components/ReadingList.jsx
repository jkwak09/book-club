import React from 'react';
import '../styles/style.css';

function ReadingList(props) {
  return(
    <div>
      {props.books.map((book, i) => {
        if(book.isCurrentlyReading){
          return(
            <div key={i}  className="book-wrapper">
              <div class="book-title"><div class="manicule">&#9758;</div>{book.title}</div>
              <div class="book-author">by {book.author.toUpperCase()}</div>
              <div class="book-description">{book.description}</div>
            </div>
          )
        } else {
          return(
            <div key={i}  className="book-wrapper">
              <div class="book-title">{book.title}</div>
              <div class="book-author">by {book.author.toUpperCase()}</div>
              <div class="book-description">{book.description}</div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default ReadingList;
