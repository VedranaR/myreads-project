import React from "react";
import Book from "./Book";

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

export default Bookshelf;
