import React, { useState, useEffect } from 'react';
import './HomePage.css'


const HomePage = ({ books, onRegisterClick }) => {
  return (
    <div className='book-container'>
      <h2>BOOK</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <img className='book' src={book.imageLinks.thumbnail}  />
            <strong className='book'>{book.title}</strong>
            <p>FREE</p>
          </li>
        ))}
      </ul>
      <button onClick={onRegisterClick}>Register</button>
    </div>
  );
};

export default HomePage;