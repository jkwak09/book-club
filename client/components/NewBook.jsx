import React from 'react';
import axios from 'axios';
import '../styles/style.css';

class NewBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      description: '',
      didRead: '',
      isCurrentlyReading: '',
      willRead: '',
      wouldRecommend: ''
    }
    // function binding
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('Submit Button was clicked')

    axios.post('/books', {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      didRead: false,
      isCurrentlyReading: false,
      willRead: true,
      wouldRecommend: false
    })
    .then((response) => {
      console.log(response)

      this.setState({
        title: '',
        author: '',
        description: '',
        didRead: '',
        isCurrentlyReading: '',
        willRead: '',
        wouldRecommend: ''
        });
    })
    .catch((error) => {
      console.log(error);
    })

    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  render(){
    return (
      <div class="book-form">
      <form>
        <label>
          Title
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} required />
        </label>
        <label>
          Author
          <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} required />
        </label>
        <label>
          Description
          <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} required />
        </label>
        <button type="button" onClick={this.handleSubmit}>
          SUBMIT
        </button>
      </form>
      </div>
    )
  };

}

export default NewBook;