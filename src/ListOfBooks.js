import React from "react";
import { Route, Link } from "react-router-dom";
import Bookshelves from "./Bookshelves";

class ListOfBooks extends React.Component {
  render() {
    const { bookshelves, books } = this.props;
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

export default ListOfBooks;
