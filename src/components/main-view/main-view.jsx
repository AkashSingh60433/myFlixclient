import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../BookView/book-view";

export const MainView = () => {
    const [books, setBooks] = useState([]);

  const [selectedBook, setSelectedBook] = useState(null); 
  
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });

        setBooks(booksFromApi);
      });
  }, []);

  if (selectedBook) {
    return (
      <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} />
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onClick={() => {
            setSelectedBook(book);
          }}
        />
      ))}
    </div>
  );
}