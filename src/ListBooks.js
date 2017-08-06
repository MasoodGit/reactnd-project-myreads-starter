import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {


  render() {

    const books = this.props.books
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
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{categoryNames[index]}</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {
                            books
                                .filter(book => book.shelf === category)
                                .map(book => (
                                  <Book
                                    onUpdateBook={this.props.onUpdateBook}
                                    key={book.id}
                                    book={book}/>
                                  ))
                          }
                        </ol>
                      </div>
                    </div>
                  </div>
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
  } //end of render ()

}

export default ListBooks
