import React from "react";
//import { Route, Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

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

export default Bookshelves;
