import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import BookDetail from "./BookDetail";
import Search from "./Search";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </>
  );
}
export default App;
