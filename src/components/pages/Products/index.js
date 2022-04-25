import React, { useState, useEffect } from "react";

// import { Grid } from "@chakra-ui/react";

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
      {/* <div className="text-white">
        <i className="fa-solid fa-1"></i>
        <i className="fa-solid fa-4"></i>
      </div> */}
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
    // <div>
    //   <div class="container">
    //     <Grid templateColumns="repeat(4, 1fr)" gap={2}>
    //       {products.map((product, key) => (
    //         <Card key={key} product={product} />
    //       ))}
    //     </Grid>
    //   </div>
    // </div>
  );
}

export default Products;
