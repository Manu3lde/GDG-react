import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="back-btn">
        Home
      </Link>
      <Link to="/Search" className="back-btn">
        Search
      </Link>
    </nav>
  );
}
export default Navbar;
