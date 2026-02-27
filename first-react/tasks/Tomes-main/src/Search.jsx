import { useSearchParams, Link } from "react-router-dom";
import Books from "./data/Books";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  const filtered = genre ? Books.filter(b => b.genre === genre) : Books;

  return (
    <div className="container">
      <h1>Search Books</h1>

      <button onClick={() => setSearchParams({ genre: "fiction" })}>
        Filter By Fiction
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setSearchParams({})}
      >
        Clear
      </button>

      <div className="movie-grid" style={{ marginTop: "20px" }}>
        {filtered.map(book => (
          <div className="movie-card" key={book.id}>
            <Link to={`/book/${book.id}`}>
              <img src={book.cover} alt={book.title} />
            </Link>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
