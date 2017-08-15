import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBookList from './SearchBookList'
import ListBooks from './ListBooks'

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
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={this.onUpdateBook}/>
        )}/>
      <Route path="/search" render={() => (
          <SearchBookList
            onQuery={this.queryForBooks}
            onUpdateBook={this.onUpdateBook}
            myBooks={this.state.books}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp
