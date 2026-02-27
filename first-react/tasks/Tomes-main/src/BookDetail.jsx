import { useParams, Link } from "react-router-dom";
import Books from "./data/Books";

function BookDetail() {
  const { id } = useParams();
  const book = Books.find(b => b.id === Number(id));

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div className="container">
      <Link to="/" className="back-btn">
        Back
      </Link>
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <img src={book.cover} alt={book.title} style={{ width: "300px" }} />
      <p>Genre: {book.genre}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;
