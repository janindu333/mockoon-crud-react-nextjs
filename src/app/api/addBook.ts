// src/api/addBook.ts
import { Book } from '../interfaces';

export async function addBook(title: string, author: string): Promise<Book> {
    const response = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author }),
    });
    if (!response.ok) {
      const errorDetails = await response.text();
      console.error('Error details:', errorDetails);
      throw new Error('Failed to add book');
    }
    return response.json();
  }
