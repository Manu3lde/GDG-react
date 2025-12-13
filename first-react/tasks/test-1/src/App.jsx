import "./App.css";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "S21",
    price: 200,
    isAvailable: true,
  },
  {
    id: 2,
    title: "S23",
    price: 350,
    isAvailable: true,
  },
  {
    id: 3,
    title: "S24",
    price: 500,
    isAvailable: false,
  },
];

function App() {
  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default App;
