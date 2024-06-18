// src/components/BookList.tsx
import React from 'react';
import { Book } from '../interfaces';

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="p-4 border-b">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
