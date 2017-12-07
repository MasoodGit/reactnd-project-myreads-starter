import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf.component'
import PropTypes from 'prop-types'

const ListBooks = (props) => {
    const categories = ["currentlyReading", "wantToRead", "read"]
    const categoryNames = ["Currently Reading", "Want To Read", "Read"]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          categories.map((category, index) => {
            return (
              <div key={index}>
                <div className="list-books-content">
                  <BookShelf onUpdateBook={props.onUpdateBook}
                             category={category}
                             categoryName={categoryNames[index]}
                             books={props.books}/>
                </div>
                <div className="open-search">
                  <Link to="/search" >Search</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    ) //end of return statement
} //end of function

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default ListBooks
