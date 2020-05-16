import React from "react";
import SearchHeading from "./SearchHeading";

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
