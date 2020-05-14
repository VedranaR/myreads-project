import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

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

class ListOfBooks extends React.Component {
  render() {
    const { bookshelves, books } = this.props; //get the actual books later
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookshelves bookshelves={bookshelves} books={books} />
        <div className="open-search">
          <Link to="search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

//export default ListOfBooks;

class Bookshelves extends React.Component {
  render() {
    const { bookshelves, books } = this.props;
    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf) => (
            <Bookshelf key={shelf.key} shelf={shelf} books={books} />
          ))}
        </div>
      </div>
    );
  }
}

//export default Bookshelves;

class Bookshelf extends React.Component {
  render() {
    const { shelf, books } = this.props;
    const booksOnShelf = books.filter((book) => book.shelf === shelf.key);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf.map((book) => (
              <Book key={book.id} book={book} shelf={shelf.key} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

//export default Bookshelf;

class Book extends React.Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage:
                  'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
              }}
            />
          </div>
          <div className="book-title">The Hobbit</div>
          <div className="book-authors">J.R.R. Tolkien</div>
        </div>
      </li>
    );
  }
}

//export default Book;

class ShelfChanger extends React.Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

//export default ShelfChanger;

class SearchBooks extends React.Component {
  render() {
    return (
      <div className="search-books">
        <SearchHeading />
        <SearchResults />
      </div>
    );
  }
}

//export default SearchBooks;

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
