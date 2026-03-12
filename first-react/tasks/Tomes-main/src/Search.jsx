import { useSearchParams, Link } from "react-router-dom";
import Books from "./data/Books";
import { useState } from "react";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblility = () => {
    setIsVisible(!isVisible);
  };
  const genre = searchParams.get("genre");
  const filtered = genre ? Books.filter(b => b.genre === genre) : Books;
  // const filters = false;

  return (
    <div className="container">
      <h1>Search Books</h1>
      {/* <button onClick={() => setSearchParams({ genre: "fiction" })}>
        Filter By
      </button> */}
      <button onClick={toggleVisiblility}>Search By: </button>
      {isVisible && (
        <ul className="searchMenu">
          <li>
            <button>Title</button>
          </li>
          <li>
            <button>Author</button>
          </li>
          <li>
            <button>Length</button>
          </li>
          <li>
            <button>Date</button>
          </li>
          <li>
            <button>Genre</button>
          </li>
        </ul>
      )}
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setSearchParams({})}
      >
        Clear
      </button>

      <div className="book-grid" style={{ marginTop: "20px" }}>
        {filtered.map(book => (
          <div className="book-card" key={book.id}>
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
