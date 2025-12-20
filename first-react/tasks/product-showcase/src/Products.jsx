function Products(product) {
  // member’s name, role, photo, and a short bio

  return (
    <div className="product-grid">
      <div className="product-card">
        <div className="header">
          {product.image != null && <img src={product.image} />}
          <h3 className="name">{product.name}</h3>
        </div>
        <div className="card-body">
          <h4 className="price">{product.price}</h4>
          {product.price > 400 && <p className="featured">Premium</p>}
          {product.inStock === false ? (
            <p className="outOfstock">Out of Stock!</p>
          ) : (
            product.isFeatured === true && <p className="featured">Featured</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Members.propTypes = {
//   name: PropTypes.string,
//   role: PropTypes.string,
// };

export default Products;
