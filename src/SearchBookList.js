import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBookList extends React.Component {
  state = {
    query: '',
    searchResults: []
  };

  componentWillUnmount() {
    this.clearSearchResults();
  }

  clearSearchResults() {
    const searchResults = [];
    this.setState({ searchResults });
  }

  updateQuery = query => {
    if (query === '' ) {
      this.setState({query: '', searchResults: []});
    } else {
      this.setState({ query: query.trim() });
      this.queryForBooks(query);
    }
  };

  queryForBooks = (query) => {
    //make api call here
    BooksAPI.search(query, 10).then(searchResults => {
      if (searchResults.error) {
        searchResults = [];
      } else {
        searchResults.map(book => {
          book.shelf = 'none';  // be default set shelf to none
          return this.props.myBooks
            .filter(b => b.id === book.id)
            .map(b => (book.shelf = b.shelf));
        });
      }
      // check if query is empty by the time data is fetched,
      // thus avoiding condition where searchResults being
      // set again after query is empty and searchResults set to []
      // test with query "lin" and then "li" and "" in quick succession
      if(!this.state.query) {
        this.setState({ searchResults: [] });
      } else {
        this.setState({ searchResults });
      }
      console.log(`${this.state.query} and ${this.state.searchResults.length}`);
    });
};

  render() {
    const books = this.state.searchResults;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={evt => this.updateQuery(evt.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                onUpdateBook={this.props.onUpdateBook}
                key={book.id}
                book={book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  } // end of render()
}

export default SearchBookList
