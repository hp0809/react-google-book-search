import React, { Component } from "react";
import BooksList from "./composition/BookList";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      printType: 'All',
      bookType: 'No filter',
      items: [],
      error: ""
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(event) {
    if (event.key === "Enter") this.search();
  }

  search() {
    const query = this.state.query;
    const key = "key=AIzaSyDVXR1Pk_er1ejHGgpQDBbArdZABWQUUUQ";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&${key}`;
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then(result => {
      if( result.totalItems !== 0){
        let books = result.items.map(item => {
          return {
            image:
              item.volumeInfo.imageLinks 
                ? item.volumeInfo.imageLinks.thumbnail
                : "",

            title: item.volumeInfo.title ? item.volumeInfo.title : "",
            authors: item.volumeInfo.authors ? item.volumeInfo.authors : "",
            publisher: item.volumeInfo.publisher
              ? item.volumeInfo.publisher
              : "",
            description: item.volumeInfo.description
              ? item.volumeInfo.description
              : ""
          };
        });

        this.setState({
          items: books
        });
      } else {
        this.setState( {
          error: "no books found"
        })
      }
      });
  }
  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }
render() {
    return (
      <main>
        <div className='header'>
          <h2>Google Book Search</h2>
          <form
            onSubmit={event => {
              event.preventDefault();
              this.search();
            }}
          >
            <input
              type="text"
              placeholder="Search for a book"
              value={this.state.query}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      {this.state.error ? (<div className="error">{this.state.error}</div>):null}
        <BooksList propsItems={this.state.items} />
    </main>
    );
  }
}