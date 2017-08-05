import React from 'react'
import { Link } from 'react-router-dom'

class SearchBookList extends React.Component {

  state = {
    query: ""
  }

  searchForBooks = (evt) => {
    if ( evt.key === 'Enter') {
      if(this.state.query) {
        this.props.onQuery(this.state.query)
      }
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
  }

  clearQuery = () => {
    this.setState(this.setState({ query: ""}))
  }

  render() {
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
              <ol className="books-grid"></ol>
            </div>
          </div>
    )
  } // end of render()
}

export default SearchBookList
