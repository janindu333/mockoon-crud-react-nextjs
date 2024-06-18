// src/components/AddBookForm.tsx
import React, { useState } from 'react';
import { addBook } from '../api/addBook';

interface AddBookFormProps {
  onAddBook: (book: { title: string; author: string }) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = await addBook(title, author);
    onAddBook(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="p-2 border mb-2"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="p-2 border mb-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
