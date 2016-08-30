import React, { Component } from 'react';
import BookList from '../containers/book-list.jsx';
import BookDetail from '../containers/book-detail.jsx';
import styles from '../styles/styles.styl';

function Main() {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  )
}

export default Main
