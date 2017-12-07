import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = (props) => {
    const books = props.books
    const category = props.category
    const categoryName = props.categoryName

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{categoryName}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                    books
                        .filter(book => book.shelf === category)
                        .map(book => (
                            <Book
                                key={book.id}
                                onUpdateBook={props.onUpdateBook}
                                book={book}/>
                            ))
                    }
                </ol>
                </div>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired
}
export default BookShelf