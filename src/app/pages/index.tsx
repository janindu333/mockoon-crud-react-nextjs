// pages/index.tsx
"use client";
import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';
import { Book } from '../interfaces';
import { fetchBooks } from '../api/fetchBooks';

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then(setBooks).catch(console.error);
  }, []);

  const handleAddBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <BookList books={books} />
      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default Home;
