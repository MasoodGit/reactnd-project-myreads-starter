import React, {Component} from 'react'

class Book extends Component {

  onUpdateBook(bookCategory) {
    this.props.onUpdateBook(this.props.book, bookCategory)
  }

  render() {
    const {book} = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 168, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange= {(evt) => this.onUpdateBook(evt.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {
            ( book.authors && book.authors.map((author) =>
              (<p> {author} </p>)
            ))
          }
        </div>
      </div>
    )
  }
}

export default Book
