// src/api/fetchBooks.ts
import { Book } from '../interfaces';

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch('http://localhost:3001/books');
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
}
