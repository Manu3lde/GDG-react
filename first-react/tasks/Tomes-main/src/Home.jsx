import { Link } from "react-router-dom";
import Books from "./data/Books";

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">
          Tomes Archive
          <div className="aurora">
            <span className="aurora__item" />
            <span className="aurora__item" />
            <span className="aurora__item" />
            <span className="aurora__item" />
          </div>
        </h1>
        <p className="subtitle">Browse a small curated list of books</p>

        <div className="movie-grid">
          {Books.map(book => (
            <div className="movie-card" key={book.id}>
              <Link to={`/book/${book.id}`}>
                <img src={book.cover} alt={book.title} />
              </Link>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.genre.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
