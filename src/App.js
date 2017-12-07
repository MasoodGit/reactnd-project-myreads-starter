import React from 'react'
import {Route, Switch} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBookList from './SearchBookList'
import ListBooks from './ListBooks'

import PageNotFoundComponent from './PageNotFound.component'

class BooksApp extends React.Component {
  state = {
      books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  onUpdateBook = (book, moveToCategory) => {
    console.log("updating....", book.title , moveToCategory)
    BooksAPI.update(book, moveToCategory).then(() => {
      book.shelf = moveToCategory
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={this.onUpdateBook}/>
        )}/>
        <Route exact path="/search" render={() => (
            <SearchBookList
              onUpdateBook={this.onUpdateBook}
              myBooks={this.state.books}
              />
          )}/>
        <Route component={PageNotFoundComponent}/>
      </Switch>
      </div>
    )
  }
}

export default BooksApp
