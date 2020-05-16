import React from "react";
import Book from "./Book";

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

export default SearchResults;
