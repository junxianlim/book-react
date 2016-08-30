import React from 'react';
import { connect } from 'react-redux';

function BookDetail({active_book}) {
  if (!active_book) {
    return <div>Select a book to get started</div>
  }

  return (
    <div>
      <h3> Book Details: </h3>
      <p>
        {active_book.title}
      </p>
      <p>
        {active_book.pages}
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    active_book: state.active_book
  }
}

export default connect(mapStateToProps)(BookDetail)
