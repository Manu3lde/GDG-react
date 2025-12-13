function ProductCard({ product }) {
  return (
    <>
      <h3>{product.title}</h3>
      <p>{product.price}$</p>
      <p>{product.isAvailable ? "In Stock" : "Out of Stock"}</p>
    </>
  );
}

export default ProductCard;
