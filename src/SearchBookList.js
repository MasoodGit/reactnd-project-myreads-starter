import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBookList extends React.Component {

  state = {
    query: "",
    searchResults: []
  }

  componentWillUnmount() {
    const searchResults = []
    this.setState({searchResults})
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
  }

  searchForBooks = (evt) => {
    if ( evt.key === 'Enter') {
      if(this.state.query) {
        this.queryForBooks(this.state.query)
      }
    }
  }

  queryForBooks = (query) => {
    //make api call here
    if (query) {
      BooksAPI.search(query, 10).then(searchResults => {
        if(searchResults.error) {
          searchResults = []
        } else {
          searchResults.map(book => (this.props.myBooks
                                      .filter( b => b.id === book.id)
                                      .map( b => book.shelf = b.shelf)
                                    )
                            )
        }

        this.setState({searchResults})

      })
    }
  }

  render() {
    const books = this.state.searchResults
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                  placeholder="Search by title or author"
                  onKeyPress={this.searchForBooks}
                  value= {this.state.query}
                  onChange={(evt) => this.updateQuery(evt.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  books.map(book => (
                    <Book
                      onUpdateBook={this.props.onUpdateBook}
                      key={book.id}
                      book={book}/>
                  ))
                }

              </ol>
            </div>
        </div>
    )
  } // end of render()
}

export default SearchBookList
