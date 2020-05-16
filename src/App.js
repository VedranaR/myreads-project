import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListOfBooks from "./ListOfBooks";
import SearchBooks from "./SearchBooks";

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
