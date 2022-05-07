import React, { useState, useEffect } from "react";

import Card from "../../Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Products({ handleAddProduct, handleRemoveProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="container">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
