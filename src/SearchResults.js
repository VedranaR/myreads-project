import React from "react";
import Book from "./Book";

class SearchResults extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid" />
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
