import { useEffect, useState } from "react"
import './style.css';

export default function BookList() {

  const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
      fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
    }, [])
    
  return (
    <>
      <div className="container">
          {books.map(book => (
            <div className="box" key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <img src={`http://localhost:4000/assets/${book.imageUrl}`} alt={'Image Logo ${book.title}'} />
            </div>
          ))}
      </div>
    </>
  )
}
