import React from "react";

class Book extends React.Component {
  render() {
    const { book, shelf } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
              }}
            />
            <ShelfChanger book={book} shelf={shelf} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.join(", ")}</div>
        </div>
      </li>
    );
  }
}

//export default Book;
