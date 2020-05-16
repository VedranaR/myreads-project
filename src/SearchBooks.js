import React from "react";
import SearchHeading from "./SearchHeading";
import SearchResults from "./SearchResults";

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

export default SearchBooks;
