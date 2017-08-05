import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBookList from './SearchBookList'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  queryForBooks = (query) => {
    //make api call here
    if (query) {
      console.log("received query from search component", query)
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks />
        )}/>
      <Route path="/search" render={() => (
          <SearchBookList onQuery={this.queryForBooks} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
