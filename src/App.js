import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListOfBooks from "./ListOfBooks";

class BooksApp extends React.Component {
  bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];

  state = {
    allBooks: [],
  };
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books });
    });
  };

  render() {
    const { allBooks } = this.state;
    return (
      <div className="app">
        <Route
          path="/"
          render={() => (
            <ListOfBooks bookshelves={this.bookshelves} books={allBooks} />
          )}
        />
        <Route path="/search" render={() => <SearchBooks books={allBooks} />} />
      </div>
    );
  }
}

export default BooksApp;

class SearchHeading extends React.Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
    );
  }
}

//export default SearchHeading;

class SearchResults extends React.Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid" />
        <Book />
      </div>
    );
  }
}

//export default SearchResults;
