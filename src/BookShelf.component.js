import React from 'react'
import Book from './Book'

function BookShelf(props) {

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
                            onUpdateBook={props.onUpdateBook}
                            key={book.id}
                            book={book}/>
                            ))
                    }
                </ol>
                </div>
            </div>
        </div>
    );
}
export default BookShelf