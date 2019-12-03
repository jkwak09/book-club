import React from 'react';
import axios from 'axios';
import '../styles/style.css';

//components
import NewBook from './NewBook.jsx';
import ReadingList from './ReadingList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,

    };

    this.getBooks = this.getBooks.bind(this);

  };


  getBooks(){
    axios.get('/books')
    .then((response) => {
      this.setState({books: response.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.books !== this.state.books) {
      return this.getBooks();
      console.log('how many times is this happening?');
    }
  }

  render() {
    const { books } = this.state;

    if (books === null) {
      return null;
    }
    return(
      <div class="container">
        <div class="title">Book Club</div>
        <NewBook />
        <ReadingList books={this.state.books} />
      </div>
    )
  };
};

export default App;
