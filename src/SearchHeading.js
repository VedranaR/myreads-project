import React from "react";
import { Route, Link } from "react-router-dom";

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

export default SearchHeading;
