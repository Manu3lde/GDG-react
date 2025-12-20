import "./App.css";
import Products from "./products";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.png";

const productsList = [
  {
    id: 1,
    name: "Ring of Favor and Protection",
    price: 120,
    inStock: true,
    isFeatured: true,
    image: image1, // Assign imported image
  },
  {
    id: 2,
    name: "Ring of sacrifice",
    price: 35,
    inStock: true,
    isFeatured: false,
    image: image2, // Assign imported image
  },
  {
    id: 3,
    name: "Blade of the Darkmoon Pendant",
    price: 350,
    inStock: false,
    isFeatured: true,
    image: image3, // Assign imported image
  },
  {
    id: 4,
    name: "Ring of Sacrifice",
    price: 500,
    inStock: true,
    isFeatured: true,
    image: image4, // Assign imported image
  },
  {
    id: 5,
    name: '"Praise the Sun" Solaire Medallion',
    price: 35,
    inStock: true,
    isFeatured: false,
    image: image5, // Assign imported image
  },
  {
    id: 6,
    name: "Ordinary Pendant",
    price: 15,
    inStock: true,
    isFeatured: false,
    image: image6, // Assign imported image
  },
];

function App() {
  return (
    <>
      {productsList.length == 0 ? (
        <p>No products in list</p>
      ) : (
        productsList.map(product => (
          <Products
            key={product.id}
            price={product.price}
            image={product.image}
            name={product.name}
            inStock={product.inStock}
            isFeatured={product.isFeatured}
          />
        ))
      )}
    </>
  );
}

export default App;
