import React from "react";
import SearchHeading from "./SearchHeading";
import SearchResults from "./SearchResults";

class SearchBooks extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div className="search-books">
        <SearchHeading />
        <SearchResults books={books} />
      </div>
    );
  }
}

export default SearchBooks;
